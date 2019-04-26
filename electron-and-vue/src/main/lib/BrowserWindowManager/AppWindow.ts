import { BrowserWindow } from 'electron'
import ConfiguredWindow from './ConfiguredWindow'

export default class AppWindow {
  config: ConfiguredWindow
  instance: BrowserWindow

  constructor(context: { config: ConfiguredWindow; instance: BrowserWindow }) {
    this.config = context.config
    this.instance = context.instance
  }

  get identifier(): string {
    return this.config.identifier
  }
}
