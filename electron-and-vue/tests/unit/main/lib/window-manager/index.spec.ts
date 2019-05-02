import WindowManager from '@/main/lib/window-manager'
import WindowConfig from '@/main/lib/window-manager/interface/WindowConfig'
import WindowController from '@/main/lib/window-manager/WindowController'
import state from '@/main/lib/window-manager/state'

const browserWindowMock = {
  loadURL: jest.fn(),
  on: jest.fn(),
  show: jest.fn(),
  hide: jest.fn(),
  removeListener: jest.fn(),
  focus: jest.fn()
}

const appMock = {
  on: jest.fn()
}

jest.mock(
  '@/main/lib/window-manager/resource/AppModule',
  () =>
    function() {
      return appMock
    }
)

jest.mock('electron', () => ({
  // ...jest.requireActual('electron'),
  BrowserWindow: jest.fn().mockImplementation(() => browserWindowMock)
}))

describe('boot window', () => {
  afterEach(() => {
    Object.values(browserWindowMock).forEach(v => {
      v.mockClear()
    })
    Object.values(appMock).forEach(v => {
      v.mockClear()
    })
    state.reset()
  })

  it('creates new instance with required config', () => {
    const testConfig: WindowConfig = {
      name: 'test',
      displayName: 'test',
      url: 'hoge',
      option: {}
    }

    const result = WindowManager.bootWindow(testConfig)

    expect(browserWindowMock.loadURL).toBeCalledTimes(1)
    expect(result.controller.constructor.name).toBe(WindowController.name)
    expect(browserWindowMock.on).toBeCalledTimes(2)
    expect(browserWindowMock.on.mock.calls[0][0]).toBe('ready-to-show')
    expect(browserWindowMock.on.mock.calls[1][0]).toBe('closed')
    expect(appMock.on).toBeCalledTimes(1)
    expect(appMock.on.mock.calls[0][0]).toBe('activate')
  })

  it("app.on('activate') calls only once", () => {
    const testConfig: WindowConfig = {
      name: 'test',
      displayName: 'test',
      url: 'hoge',
      option: {}
    }

    const testConfig2: WindowConfig = {
      name: 'test2',
      displayName: 'test2',
      url: 'hoge2',
      option: {}
    }

    WindowManager.bootWindow(testConfig)
    WindowManager.bootWindow(testConfig2)

    expect(browserWindowMock.loadURL).toBeCalledTimes(2)
    expect(browserWindowMock.on).toBeCalledTimes(4)
    expect(appMock.on).toBeCalledTimes(1)
    expect(appMock.on.mock.calls[0][0]).toBe('activate')
  })

  it('retrieves exist controller', () => {
    const testConfig: WindowConfig = {
      name: 'test',
      displayName: 'test',
      url: 'hoge',
      option: {}
    }
    const existController = new WindowController(testConfig)

    jest.spyOn(Array.prototype, 'find').mockImplementationOnce(() => existController)

    const result = WindowManager.bootWindow(testConfig)
    expect(result.controller).toBe(existController)
  })
})
