import WindowConfig from './interface/WindowConfig'
import { BrowserWindowConstructorOptions } from 'electron'
import { activateWindow } from '.'

/** Windowマネージャが読み込んだコンフィグはこの形式のオブジェクトになり、管理される */
export default class WindowController implements WindowConfig {
  /** コンフィグの識別名。 */
  name: string
  /** ウィンドウの表示用の名前。好きな様につけていい */
  displayName: string
  /** 読み込むURL。指定があると自動でloadURL()を呼ぶ。 */
  url?: string
  option: BrowserWindowConstructorOptions
  /** 同じ識別名で作ったウィンドウがすでに存在する場合、それを表示させ、いくつもウィンドウを生成しない */
  singleton: boolean
  /** ウィンドウの閉じるボタンを押したとき、閉じずに隠す */
  keepAlive: boolean
  /** ready-to-show イベントが起きたら、自動でウィンドウを立ち上げる */
  autoVisible: boolean
  /** (Macのみ)ウィンドウがゼロの状態でアプリに切り替えた時、最初に表示するか */
  primary: boolean

  constructor(config: WindowConfig) {
    this.name = config.name
    this.displayName = config.displayName
    this.url = config.url
    this.option = config.option
    this.singleton = config.singleton || false
    this.keepAlive = config.keepAlive || false
    this.autoVisible = config.autoVisible || true
    this.primary = config.primary || false
  }

  public createWindow(): void {
    activateWindow(this)
  }
}
