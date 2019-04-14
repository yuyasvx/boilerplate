import { Module, VuexModule, Mutation, getModule, Action } from 'vuex-module-decorators'
import store from '@/renderer/store'

export interface IExampleState {
  count: number
}

@Module({ namespaced: true, name: 'ExampleStore', dynamic: true, store })
export class ExampleStore extends VuexModule implements IExampleState {
  count = 0

  @Mutation
  increment(delta: number): void {
    this.count += delta
  }
  @Mutation
  decrement(delta: number): void {
    this.count -= delta
  }
  @Action({ commit: 'increment' })
  incr(): number {
    return 5
  }
}

const exampleStore = getModule(ExampleStore)
export default exampleStore
