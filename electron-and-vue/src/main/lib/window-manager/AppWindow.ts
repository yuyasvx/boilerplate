import { BrowserWindow } from 'electron'
import WindowController from './WindowController'

/**
 * 生成済みのBrowserWindowと、生成元になったWindowControllerの入れ物
 */
export default class AppWindow {
  controller: WindowController
  instance: BrowserWindow

  constructor(context: { controller: WindowController; instance: BrowserWindow }) {
    this.controller = context.controller
    this.instance = context.instance
  }

  get controllerName(): string {
    return this.controller.name
  }

  get id(): number {
    return this.instance.id
  }

  get destroyed(): boolean {
    return this.instance.isDestroyed()
  }
}
