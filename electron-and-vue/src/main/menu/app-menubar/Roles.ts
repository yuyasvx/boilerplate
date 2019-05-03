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
    { role: 'pasteandmatchstyle' },
    { role: 'selectall' },
    { role: 'delete' },

    { type: 'separator' },

    { role: 'minimize' },
    { role: 'close' },
    { role: 'quit' },

    { type: 'separator' },

    { role: 'reload' },
    { role: 'forcereload' },
    { role: 'toggledevtools' },
    { role: 'togglefullscreen' },

    { type: 'separator' },
    { label: 'Available Only On macOS', enabled: false },

    { role: 'about' },
    { role: 'hide' },
    { role: 'hideothers' },
    { role: 'unhide' },
    { role: 'startspeaking' },
    { role: 'stopspeaking' },
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
