import { MenuItemConstructorOptions } from 'electron'

const macOsHelp: MenuItemConstructorOptions = {
  label: 'Help',
  role: 'help',
  submenu: [{ label: 'item', enabled: false }, { label: 'item2', enabled: false }]
}

export default macOsHelp
