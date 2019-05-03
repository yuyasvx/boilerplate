import AppMenu from '@/main/menu/app-menubar/AppMenu'
import Debug from '@/main/menu/app-menubar/Debug'
import Roles from '@/main/menu/app-menubar/Roles'
import macOsHelp from '@/main/menu/app-menubar/MecOsHelp'
import Attributes from '@/main/menu/app-menubar/Attributes'
import { Menu, MenuItemConstructorOptions } from 'electron'

const build = (): MenuItemConstructorOptions[] => {
  const menu = [AppMenu, Debug, Roles, Attributes]
  if (process.platform === 'darwin') {
    menu.push(macOsHelp)
  }
  return menu
}

export default Menu.buildFromTemplate(build())
