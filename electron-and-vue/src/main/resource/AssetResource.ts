import path from 'path'

export const assetsDirectory =
  process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, '../assets')
    : path.resolve(__dirname, '../../src/assets')

export const getAsset = (pathStr: string): string => {
  return path.normalize(`${assetsDirectory}${pathStr}`)
}
