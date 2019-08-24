// Add zero in front of numbers < 10
export function zeroPad(i: number): string {
  if (i < 10) {
    return `0${i}`
  }
  return `${i}`
}

export function floor(value: number, floorValue: number): number {
  while (value % floorValue !== 0) {
    value--

    if (value < 0) {
      throw new Error('処理が変')
    }
  }

  return Math.floor(value)
}
