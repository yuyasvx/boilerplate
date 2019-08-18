import { TouchBar, BrowserWindow } from 'electron'

const { TouchBarLabel, TouchBarButton, TouchBarSpacer, TouchBarPopover, TouchBarSlider, TouchBarColorPicker } = TouchBar

const attachTouchBarMenu = (toWindow: BrowserWindow): void => {
  const touchBarButton1 = new TouchBarButton({
    backgroundColor: '#a4ce00',
    label: 'Hello!',
    click() {}
  })

  const tbl1 = new TouchBarLabel({
    label: 'Hello',
    textColor: '#b20000'
  })

  const popover = new TouchBarPopover({
    showCloseButton: true,
    label: 'PopOver',
    items: new TouchBar({ items: [tbl1] })
  })

  const slider = new TouchBarSlider({
    label: 'hoge',
    minValue: 0,
    maxValue: 100,
    value: 50
  })

  const colorpicker = new TouchBarColorPicker({
    availableColors: ['#333333', '#00aaff', '#ff6f00']
  })

  const tb = new TouchBar({
    items: [
      touchBarButton1,
      tbl1,
      popover,
      new TouchBarSpacer({ size: 'small' }),
      slider,
      new TouchBarSpacer({ size: 'small' }),
      colorpicker
    ]
  })
  toWindow.setTouchBar(tb)
}

export default attachTouchBarMenu
