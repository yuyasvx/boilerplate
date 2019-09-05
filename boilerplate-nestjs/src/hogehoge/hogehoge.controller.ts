import { Controller, Get } from '@nestjs/common'
import { HogehogeService } from './hogehoge.service'

@Controller('hogehoge')
export class HogehogeController {
  constructor(private readonly hogehogeService: HogehogeService) {}

  @Get()
  public getHello(): string {
    return this.hogehogeService.do()
  }
}
