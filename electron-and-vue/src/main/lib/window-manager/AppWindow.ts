import { BrowserWindow } from 'electron'
import WindowController from './WindowController'

/**
 * 生成済みのBrowserWindowと、生成元になったWindowControllerの入れ物
 */
export default class AppWindow {
  public readonly controller: WindowController

  public readonly instance: BrowserWindow

  constructor(context: { controller: WindowController; instance: BrowserWindow }) {
    this.controller = context.controller
    this.instance = context.instance
  }

  public get controllerName(): string {
    return this.controller.name
  }

  public get id(): number {
    return this.instance.id
  }

  public get destroyed(): boolean {
    return this.instance.isDestroyed()
  }
}
