import { ipcMain } from 'electron'

const ExampleService = {
  execute() {
    ipcMain.once('example', () => {})
  }
}

export default ExampleService
