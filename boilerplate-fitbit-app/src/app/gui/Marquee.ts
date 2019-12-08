import document from 'document'

type AsyncFn = () => Promise<unknown>

class MarqueeCore {
  private readonly transfrom: Transform
  private readonly delta: number
  private animationHandlerId: number | undefined
  private readonly timeout: number
  private textWidth: number
  private offset = 0
  private readonly SPACE = 80
  private queue: AsyncFn[] = []
  private readonly times: number

  constructor(transfrom: Transform, width: number, delta: number, timeout: number, times = 0) {
    this.transfrom = transfrom
    this.textWidth = width
    this.delta = delta
    this.timeout = timeout
    this.times = times
  }

  public async run(): Promise<void> {
    const runnerFn = (): Promise<void> =>
      new Promise(resolve => {
        this.animationHandlerId = setInterval(() => {
          if (this.animationHandlerId != null && this.offset >= this.textWidth + this.SPACE) {
            clearInterval(this.animationHandlerId)
            this.offset = 0
            this.transfrom.translate.x = 0
            resolve()
            return
          }
          this.offset += this.delta
          this.transfrom.translate.x = -this.offset
        }, this.timeout)
      })

    for (let i = 0; i < this.times; i++) {
      await runnerFn()
    }
  }

  public stop(): void {
    if (this.animationHandlerId != null) {
      clearInterval(this.animationHandlerId)
    }
  }
}

export default class Marquee {
  public readonly id: string
  private _text = ''
  public readonly autoEnabled: boolean
  public readonly element: Element
  private textElements: TextElement[]
  private textWidth = 0
  private core: MarqueeCore | undefined
  private bounds: DOMRect | undefined

  constructor(id: string, text: string, autoEnabled: boolean) {
    this.id = id
    this.autoEnabled = autoEnabled
    const element = document.getElementById(`#${id}`)
    if (element == null) {
      throw new Error('Could not find element.')
    }
    this.element = element
    this.textElements = this.element.getElementsByClassName('component-marquee-text') as TextElement[]
    this.setBounds()
    this.setText(text)
  }

  public run(times?: number): void {
    if (this.bounds != null && this.bounds.width > this.textWidth) {
      return
    }
    const graphic = this.element.getElementById('component-marquee-group') as GroupElement
    const transfrom = graphic.groupTransform
    if (transfrom != null) {
      this.core = new MarqueeCore(transfrom, this.textWidth, 4, 50, times)
      this.core.run()
    }
  }

  public stop(): void {
    if (this.core != null) {
      this.core.stop()
    }
  }

  public get text(): string {
    return this._text
  }

  public setText(text: string): void {
    this._text = text
    this.textElements.forEach(elm => {
      elm.text = text
      this.textWidth = this.decideTextWidth(elm)
      elm.style.display = 'inherit'
    })

    if (this.bounds != null && this.bounds.width > this.textWidth) {
      this.textElements[1].style.display = 'none'
    }
  }

  private setBounds(): void {
    const gElement = this.element as GraphicsElement
    this.bounds = gElement.getBBox()

    this.textElements.forEach(elm => {
      const fontSize = elm.style.fontSize
      if (fontSize != null && fontSize > 0) {
        elm.y = fontSize
      } else {
        elm.y = 40
      }
    })
  }

  private decideTextWidth(element: TextElement): number {
    let width = isNaN(element.width) ? 0 : element.width
    element.width = width === 0 ? 100 : element.width

    if (element.textOverflowing) {
      while (element.textOverflowing) {
        width += 1
        element.width = width
      }
    } else {
      while (!element.textOverflowing) {
        width -= 1
        element.width = width
      }
      width += 1
      element.width = width
    }
    return width
  }
}
