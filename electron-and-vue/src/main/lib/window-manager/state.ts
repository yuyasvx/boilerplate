import WindowController from '@/main/lib/window-manager/WindowController'
import AppWindow from '@/main/lib/window-manager/AppWindow'

export interface IState {
  /** 読み込み済みWindowConfig */
  configuredWindows: WindowController[]

  /** 作成済みウィンドウの一覧 */
  createdWindows: AppWindow[]

  activated: boolean
}

class State implements IState {
  public activated: boolean
  public configuredWindows: WindowController[]
  public createdWindows: AppWindow[]

  constructor() {
    this.configuredWindows = []
    this.createdWindows = []
    this.activated = false
  }

  /**
   * ※単体テスト実行用
   */
  public reset(): void {
    this.configuredWindows = []
    this.createdWindows = []
    this.activated = false
  }
}

let instance: State | undefined

const getState = (): State => {
  if (instance == null) {
    return new State()
  } else {
    return instance
  }
}

export default getState()
