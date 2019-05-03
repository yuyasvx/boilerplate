import { MenuItemConstructorOptions } from 'electron'
import { getAsset } from '@/main/resource/AssetResource'

const attributes: MenuItemConstructorOptions = {
  label: 'Attributes',
  submenu: [
    { label: 'Disabled', enabled: false },
    { label: 'Enabled', enabled: true, click() {} },
    { label: 'Accelerated', enabled: true, click() {}, accelerator: 'CommandOrControl+Alt+Shift+M' },

    { type: 'separator' },
    {
      label: 'Submenu',
      enabled: true,
      submenu: [{ label: 'item', enabled: false }]
    },

    { type: 'separator' },

    { label: 'Check Item1', type: 'checkbox', checked: true, click() {} },
    { label: 'Check Item2', type: 'checkbox', checked: false, click() {} },
    { label: 'Check Item3', type: 'checkbox', checked: false, click() {} },

    { type: 'separator' },

    { label: 'Menu Item With Icon', icon: getAsset('/menu-icon-test.png'), click() {} },
    { label: 'Menu Item With Icon', icon: getAsset('/menu-icon-test.png'), click() {} },
    { label: 'Menu Item With Icon', icon: getAsset('/menu-icon-test.png'), click() {} }
  ]
}

export default attributes
