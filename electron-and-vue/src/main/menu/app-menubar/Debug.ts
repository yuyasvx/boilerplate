import { MenuItemConstructorOptions } from 'electron'

const debug: MenuItemConstructorOptions = {
  label: 'Debug!',
  submenu: [
    {
      label: 'About Example App',
      role: 'about'
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

export default debug
