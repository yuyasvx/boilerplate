/* eslint-env jest */
import { Test, TestingModule } from '@nestjs/testing'
import { HogehogeService } from './hogehoge.service'

describe('HogehogeService', () => {
  let service: HogehogeService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HogehogeService]
    }).compile()

    service = module.get<HogehogeService>(HogehogeService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
