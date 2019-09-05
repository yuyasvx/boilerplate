import { Module } from '@nestjs/common'
import { HogehogeController } from './hogehoge.controller'
import { HogehogeService } from './hogehoge.service'

@Module({
  controllers: [HogehogeController],
  providers: [HogehogeService]
})
export class HogehogeModule {}
