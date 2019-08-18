import { MenuItemConstructorOptions } from 'electron'

const roles: MenuItemConstructorOptions = {
  label: 'Roles',
  submenu: [
    { role: 'undo' },
    { role: 'redo' },

    { type: 'separator' },

    { role: 'cut' },
    { role: 'copy' },
    { role: 'paste' },
    { role: 'pasteAndMatchStyle' },
    { role: 'selectAll' },
    { role: 'delete' },

    { type: 'separator' },

    { role: 'minimize' },
    { role: 'close' },
    { role: 'quit' },

    { type: 'separator' },

    { role: 'reload' },
    { role: 'forceReload' },
    { role: 'toggleDevTools' },
    { role: 'togglefullscreen' },

    { type: 'separator' },
    { label: 'Available Only On macOS', enabled: false },

    { role: 'about' },
    { role: 'hide' },
    { role: 'hideOthers' },
    { role: 'unhide' },
    { role: 'startSpeaking' },
    { role: 'stopSpeaking' },
    { role: 'front' },
    { role: 'zoom' },
    // { role: 'toggletabbar' },
    // { role: 'selectnexttab' },
    // { role: 'selectprevioustab' },
    // { role: 'mergeallwindows' },
    // { role: 'movetabtonewwindow' },
    // { role: 'window' },
    // { role: 'help' },
    { role: 'services' }
  ]
}

export default roles
