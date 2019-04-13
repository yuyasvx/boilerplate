import { BrowserWindow, ipcMain } from "electron";
import target from "@/main/service/ExampleService";

// Electronの一部をモックにする
jest.mock("electron", () => ({
  ...jest.requireActual("electron"),
  ipcMain: {
    once: jest.fn() //ipcMain.once() をモックにする
  },
  BrowserWindow: jest.fn()
}));

//ipcMain.once() をモックにする
const spyIpcMain = jest
  .spyOn(ipcMain, "once")
  .mockImplementation(() => ipcMain);

describe("example test", () => {
  beforeAll(() => {});

  it("shoule be mocked BrowserWindow", () => {
    new BrowserWindow();
  });

  it("should be called once", () => {
    target.execute();

    expect(ipcMain.once).toBeCalledTimes(1);
    expect(spyIpcMain.mock.calls[0][0]).toBe("example");
  });
});
