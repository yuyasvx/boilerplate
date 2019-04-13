import { ipcMain } from 'electron'

const ExampleService = {
  execute(): void {
    ipcMain.once('example', (): void => {})
  }
}

export default ExampleService
