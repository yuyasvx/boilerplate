import path from 'path'
import { app, ipcMain } from 'electron'
import { bootWindow } from './lib/window-manager'
import WindowConfig from './lib/window-manager/interface/WindowConfig'

const HOME_URL: string = path.normalize(`${__dirname}/../.`)
const BUILT_HTML_PATH: string =
  process.env.NODE_ENV === 'production' ? `file://${HOME_URL}/renderer/index.html#/` : 'http://localhost:8080/#/'
const conf: WindowConfig = {
  name: 'main-window',
  displayName: 'Vue Boilerplate',
  singleton: true,
  keepAlive: false,
  primary: true,
  url: BUILT_HTML_PATH,
  option: {
    width: 1200,
    height: 720,
    minWidth: 1200,
    minHeight: 720,
    useContentSize: true,
    fullscreenable: true,
    show: false,
    titleBarStyle: 'default',
    title: 'Vue on Electron Boilerplate',
    webPreferences: { scrollBounce: false, nodeIntegration: true },
    darkTheme: true
  }
}

app.on('ready', () => {
  ipcMain.on('ping', (event: Electron.Event) => {
    event.sender.send('pong', 'pong')
  })

  bootWindow(conf)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
