import { ipcMain } from 'electron'
import ExampleService from '@/main/service/ExampleService'

// mock part of Electron
jest.mock('electron', () => ({
  ...jest.requireActual('electron'),
  ipcMain: {
    once: jest.fn() // mock ipcMain.once()
  },
  BrowserWindow: jest.fn()
}))

// mock ipcMain.once()
const spyIpcMain = jest.spyOn(ipcMain, 'once').mockImplementation(() => ipcMain)

describe('example test', () => {
  beforeAll(() => {})

  it('should be called ipcMain.once()', () => {
    ExampleService.execute()

    expect(ipcMain.once).toBeCalledTimes(1)
    expect(spyIpcMain.mock.calls[0][0]).toBe('example')
  })
})
