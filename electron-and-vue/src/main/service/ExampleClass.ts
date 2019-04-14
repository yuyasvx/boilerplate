/**
 * Example Class
 */
export default class ExampleClass {
  public abcde: string
  callback: (a: string, b: boolean) => void

  constructor() {
    this.abcde = ''
    this.callback = () => {}
  }

  /**
   * An explanation of this method
   * @param a example parameter
   */
  exampleMethod(a: string): void {
    this.abcde = a
  }
}
