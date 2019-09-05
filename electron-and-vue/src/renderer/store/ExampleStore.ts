import { Module, VuexModule, Mutation, getModule, Action } from 'vuex-module-decorators'
import store from '@/renderer/store'

export interface IExampleState {
  count: number
}

@Module({ namespaced: true, name: 'ExampleStore', dynamic: true, store })
export class ExampleStore extends VuexModule implements IExampleState {
  public count = 0

  @Mutation
  public increment(delta: number): void {
    this.count += delta
  }

  @Mutation
  public decrement(delta: number): void {
    this.count -= delta
  }

  @Action({ commit: 'increment' })
  public incr(): number {
    return 5
  }
}

const exampleStore = getModule(ExampleStore)
export default exampleStore
