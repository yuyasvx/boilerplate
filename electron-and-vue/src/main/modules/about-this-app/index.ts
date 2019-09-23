import path from 'path'
import { bootWindow } from '@/main/lib/window-manager'
import WindowConfig from '@/main/lib/window-manager/interface/WindowConfig'

export const aboutThisApp = (): void => {
  const HOME_URL: string = path.normalize(`${__dirname}/../.`)
  const BUILT_HTML_PATH: string =
    process.env.NODE_ENV === 'production'
      ? `file://${HOME_URL}/renderer/about.html#/`
      : 'http://localhost:8080/about.html'

  const aboutWindowConfig: WindowConfig = {
    name: 'window-about-this-app',
    displayName: 'About',
    singleton: true,
    keepAlive: false,
    url: BUILT_HTML_PATH,
    option: {
      width: 640,
      height: 320,
      useContentSize: true,
      fullscreenable: false,
      resizable: true,
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
