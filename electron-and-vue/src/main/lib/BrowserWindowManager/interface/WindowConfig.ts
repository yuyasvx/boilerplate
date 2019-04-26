import { BrowserWindowConstructorOptions } from 'electron'

export default interface WindowConfig {
  /** ウィンドウの識別名。create時に名前がかぶると例外 */
  identifier: string
  /** ウィンドウの表示用の名前。好きな様につけていい */
  displayName: string
  /** 読み込むURL。指定があると自動でloadUrl()を呼ぶ。 */
  url?: string
  option: BrowserWindowConstructorOptions
  /** 同じidentifierで作ったウィンドウがすでに存在する場合、それを表示させ、いくつもウィンドウを生成しない */
  singleton?: boolean
  /** ウィンドウの閉じるボタンを押したとき、閉じずに隠す */
  keepAlive?: boolean
  /** ready-to-show イベントが起きたら、自動でウィンドウを立ち上げる */
  autoVisible?: boolean
}
