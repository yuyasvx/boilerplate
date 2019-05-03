import { MenuItemConstructorOptions } from 'electron'
import WindowConfig from '@/main/lib/window-manager/interface/WindowConfig'
import path from 'path'
import WindowManager, { bootWindow } from '@/main/lib/window-manager'

const appMenu: MenuItemConstructorOptions = {
  label: 'Example App Name',
  submenu: [
    {
      label: 'About Example App',
      // role: 'about',
      click() {
        const HOME_URL: string = path.normalize(`${__dirname}/../.`)
        const BUILT_HTML_PATH: string =
          process.env.NODE_ENV === 'production'
            ? `file://${HOME_URL}/renderer/about.html#/`
            : 'http://localhost:8080/about.html'
        const aboutWindowConfig: WindowConfig = {
          name: 'about-window',
          displayName: 'About',
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
            title: 'About',
            maximizable: false,
            minimizable: false,
            webPreferences: { scrollBounce: false, nodeIntegration: true }
          }
        }

        bootWindow(aboutWindowConfig)
      }
    },
    { type: 'separator' },
    {
      // label: 'Services',
      role: 'services'
    },
    { type: 'separator' },
    {
      // label: 'Hide',
      role: 'hide'
    },
    {
      // label: 'Hide Others',
      role: 'hideothers'
    },
    {
      // label: 'Unhide',
      role: 'unhide'
    },
    { type: 'separator' },
    {
      // label: 'Quit',
      role: 'quit'
    }
  ]
}

export default appMenu
