import fs from 'fs'
import util from 'util'
import path from 'path'
import { app, ipcMain, Menu, BrowserWindow } from 'electron'
import { bootWindow } from './lib/window-manager'
import WindowConfig from './lib/window-manager/interface/WindowConfig'
import appMenuBar from '@/main/menu/app-menubar'
import { getChromeExtensionPath } from '@/main/resource/DirectoryResource'
import attatchToucBar from '@/main/menu/touch-bar/ExampleTouchBarMenu'

const HOME_URL: string = path.normalize(`${__dirname}/../.`)
const BUILT_HTML_PATH: string =
  process.env.NODE_ENV === 'production' ? `file://${HOME_URL}/renderer/index.html#/` : 'http://localhost:8080/#/'
const conf: WindowConfig = {
  name: 'main-window',
  displayName: 'Vue Boilerplate',
  singleton: true,
  keepAlive: true,
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
    webPreferences: { scrollBounce: false, nodeIntegration: true }
  }
}
const readDir = util.promisify(fs.readdir)
const vueDevToolsPath = getChromeExtensionPath('nhdogjmejiglipccpnnnanhbledajbpd')

app.on('ready', () => {
  Menu.setApplicationMenu(appMenuBar)
  ipcMain.on('ping', (event: Electron.Event) => {
    event.sender.send('pong', 'pong')
  })
  readDir(vueDevToolsPath).then(files => {
    if (files.length === 0) {
      return
    }
    BrowserWindow.addDevToolsExtension(path.normalize(`${vueDevToolsPath}/${files.pop()}`))
  })
  const mainWindowConf = bootWindow(conf)
  mainWindowConf.instance.on('ready-to-show', () => {
    attatchToucBar(mainWindowConf.instance)
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
