import { MenuItemConstructorOptions } from 'electron'
import { aboutThisApp } from '@/main/modules/about-this-app'

const appMenu: MenuItemConstructorOptions = {
  label: 'Example App Name',
  submenu: [
    {
      label: 'About Example App',
      // role: 'about',
      click() {
        aboutThisApp()
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
      role: 'hideOthers'
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
