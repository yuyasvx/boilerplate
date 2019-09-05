import { Test, TestingModule } from '@nestjs/testing'
import { HogehogeController } from './hogehoge.controller'

describe('Hogehoge Controller', () => {
  let controller: HogehogeController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HogehogeController]
    }).compile()

    controller = module.get<HogehogeController>(HogehogeController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
