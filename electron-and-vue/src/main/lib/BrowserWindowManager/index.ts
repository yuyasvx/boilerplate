import WindowConfig from './interface/WindowConfig'
import { BrowserWindow } from 'electron'
import ConfiguredWindow from './ConfiguredWindow'
import AppWindow from './AppWindow'

/** 読み込み済みWindowConfig */
const configuredWindows: ConfiguredWindow[] = []

/** 作成済みウィンドウの一覧 */
const createdWindows: AppWindow[] = []

const create = (config: WindowConfig): BrowserWindow => {
  const configured = new ConfiguredWindow(config)
  const window = new BrowserWindow(config.option)
  // TODO Windowに関するオプションは最後に設定できないか？
  if (config.autoVisible) {
    window.on('ready-to-show', () => {
      if (window !== null) {
        window.show()
      }
    })
  }
  window.on('closed', () => {
    // window = null
  })
  configuredWindows.push(configured)
  createdWindows.push(new AppWindow({ config: configured, instance: window }))

  return window
}

const getWindowConfig = (identifier: string): ConfiguredWindow | undefined => {
  return configuredWindows.find(w => w.identifier === identifier)
}

export default {
  create,
  getWindowConfig
}
