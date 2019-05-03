import { BrowserWindowConstructorOptions, Menu } from 'electron'

export default interface WindowConfig {
  /** コンフィグの識別名。 */
  name: string
  /** ウィンドウの表示用の名前。好きな様につけていい */
  displayName: string
  /** 読み込むURL。指定があると自動でloadUrl()を呼ぶ。 */
  url?: string
  option: BrowserWindowConstructorOptions
  /** 同じ識別名で作ったウィンドウがすでに存在する場合、それを表示させ、いくつもウィンドウを生成しない */
  singleton?: boolean
  /** ウィンドウの閉じるボタンを押したとき、閉じずに隠す */
  keepAlive?: boolean
  /** ready-to-show イベントが起きたら、自動でウィンドウを立ち上げる */
  autoVisible?: boolean
  /** (Macのみ)ウィンドウがゼロの状態でアプリに切り替えた時、最初に表示するか */
  primary?: boolean
  /** (Windowsのみ)メニューバーとしてセットしたいMenuオブジェクト */
  menuBar?: Menu
}
