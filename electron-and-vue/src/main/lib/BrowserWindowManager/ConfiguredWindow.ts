import WindowConfig from './interface/WindowConfig'
import { BrowserWindowConstructorOptions } from 'electron'

// TODO てか ConfiguredWindow じゃくて AppWindowControllerじゃね？
/** Windowマネージャが読み込んだコンフィグはこの形式のオブジェクトになり、管理される */
export default class ConfiguredWindow implements WindowConfig {
  /** ウィンドウの識別名。create時に名前がかぶると例外 */
  identifier: string
  /** ウィンドウの表示用の名前。好きな様につけていい */
  displayName: string
  // TODO ↑これ必須じゃなくてもいいかもね

  /** 読み込むURL。指定があると自動でloadUrl()を呼ぶ。 */
  url: string | undefined
  option: BrowserWindowConstructorOptions
  /** 同じidentifierで作ったウィンドウがすでに存在する場合、それを表示させ、いくつもウィンドウを生成しない */
  singleton: boolean | undefined
  /** ウィンドウの閉じるボタンを押したとき、閉じずに隠す */
  keepAlive: boolean | undefined
  /** ready-to-show イベントが起きたら、自動でウィンドウを立ち上げる */
  autoVisible: boolean | undefined

  constructor(config: WindowConfig) {
    this.identifier = config.identifier
    this.displayName = config.displayName
    this.url = config.url
    this.option = config.option
    this.singleton = config.singleton
    this.keepAlive = config.keepAlive
    this.autoVisible = config.autoVisible
  }

  // TODO setterを作って、値をセットしたときにBrowserWindowの挙動も変えられるようにしたい
}
