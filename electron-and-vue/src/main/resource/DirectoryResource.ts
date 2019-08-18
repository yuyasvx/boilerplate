import path from 'path'
import { app } from 'electron'

export const getChromeExtensionPath = (id: string): string => {
  return path.normalize(`${app.getPath('home')}/Library/Application Support/Google/Chrome/Default/Extensions/${id}`)
}
