import { MenuItemConstructorOptions, dialog } from 'electron'
import path from 'path'
import WindowConfig from '@/main/lib/window-manager/interface/WindowConfig'
import WindowManager from '@/main/lib/window-manager'

const debug: MenuItemConstructorOptions = {
  label: 'Dialogue',
  submenu: [
    {
      label: 'Show Modal Browser Window',
      click() {
        const parentWindow = WindowManager.createdWindows.find(w => w.controllerName === 'main-window')
        if (parentWindow == null) {
          return
        }
        const HOME_URL: string = path.normalize(`${__dirname}/../.`)
        const BUILT_HTML_PATH: string =
          process.env.NODE_ENV === 'production'
            ? `file://${HOME_URL}/renderer/index.html#/main/modal/`
            : 'http://localhost:8080/index.html#/main/modal/'

        const modalWindowConfig: WindowConfig = {
          name: 'modal-window',
          displayName: 'Modal',
          singleton: true,
          keepAlive: false,
          url: BUILT_HTML_PATH,
          option: {
            width: 640,
            height: 320,
            useContentSize: true,
            fullscreenable: false,
            resizable: false,
            show: false,
            titleBarStyle: 'default',
            frame: false,
            title: 'About',
            maximizable: false,
            minimizable: false,
            webPreferences: { scrollBounce: false, nodeIntegration: true }
            // parent: parentWindow.instance,
          }
        }

        WindowManager.bootWindow(modalWindowConfig)
      }
    },
    {
      label: 'Show Info Dialog',
      click() {
        dialog.showMessageBox({
          type: 'info',
          defaultId: 0,
          buttons: ['Most Important', 'Important', 'Another'],
          title: 'Dialog',
          message: 'Message.',
          detail: 'Additional information'
        })
      }
    },
    {
      label: 'Show Question Dialog',
      click() {
        dialog.showMessageBox({
          type: 'question',
          defaultId: 0,
          buttons: ['OK', 'Cancel'],
          title: 'Dialog',
          message: 'Message.',
          detail: 'Additional information'
        })
      }
    },
    {
      label: 'Show Error Dialog',
      click() {
        dialog.showErrorBox('Error', 'Error content.')
      }
    }
  ]
}

export default debug
