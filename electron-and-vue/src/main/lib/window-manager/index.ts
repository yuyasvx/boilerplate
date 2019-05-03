import WindowConfig from './interface/WindowConfig'
import { BrowserWindow } from 'electron'
import WindowController from './WindowController'
import AppWindow from './AppWindow'
import appModule from './resource/AppModule'
import state from './state'

/**
 * 読み込み済みWindowConfigからウィンドウを作る。
 * URLが指定された場合は自動で読み込む。autoVisibleが指定された場合は、画面描画が出来た時自動で表示する。
 * シングルトンなウィンドウの場合は、すでにインスタンスがあるか確認して、存在しない場合のみ作り、
 * 存在する場合はフォーカスする。
 * @param controller コントローラオブジェクト
 */
export const activateWindow = (controller: WindowController): AppWindow => {
  const app = appModule()

  if (controller.singleton) {
    const created = state.createdWindows.find(w => w.controllerName === controller.name)
    if (created != null) {
      created.instance.show()
      return created
    }
  }

  const window = new BrowserWindow(controller.option)
  if (controller.url) {
    window.loadURL(controller.url)
  }
  if (controller.autoVisible) {
    window.on('ready-to-show', () => {
      window.show()
    })
  }
  if (controller.keepAlive) {
    const keepAliveEvent = (event: Electron.Event): void => {
      window.hide()
      event.preventDefault()
    }
    window.on('close', keepAliveEvent)
    app.on('before-quit', () => {
      window.removeListener('close', keepAliveEvent)
    })
  }
  if (controller.menuBar && process.platform !== 'darwin') {
    window.setMenu(controller.menuBar)
  }
  window.on('closed', () => {
    state.clearGarbage()
  })
  const appWindow = new AppWindow({ controller, instance: window })
  state.createdWindows.push(appWindow)
  return appWindow
}

const activatePrimaryWindow = (): void => {
  const app = appModule()

  if (state.activated) {
    return
  }
  app.on('activate', () => {
    const allWindows = BrowserWindow.getAllWindows()
    const visibleWindows = allWindows.filter(w => {
      if (w.isVisible()) {
        return true
      } else if (w.isMinimized()) {
        return true
      }
      return false
    })
    if (allWindows.length < 1 || visibleWindows.length < 1) {
      const primaryConfig = state.configuredWindows.find(w => w.primary)
      if (primaryConfig != null) {
        activateWindow(primaryConfig)
      }
    }
  })
  state.activated = true
}

/**
 * 最初はこれを使う。configから必要に応じてBrowserWindowを生成してウィンドウを表示する。
 * configは読み込むとWindowControllerに変化し、WindowManagerの管理対象になる。
 * @param config WindowConfigオブジェクト
 * @returns BrowserWindowとWindowController
 */
export const bootWindow = (config: WindowConfig): AppWindow => {
  state.configuredWindows = state.configuredWindows.filter(w => w.name !== config.name)
  const controller = new WindowController(config)
  state.configuredWindows.push(controller)
  activatePrimaryWindow()

  return activateWindow(controller)
}

const WindowManager = {
  bootWindow,
  activateWindow,
  get createdWindows() {
    return state.createdWindows
  },
  get configuredWindows() {
    return state.configuredWindows
  }
}

export default WindowManager
