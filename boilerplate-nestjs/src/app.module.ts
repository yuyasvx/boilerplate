import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HogehogeModule } from './hogehoge/hogehoge.module'

@Module({
  imports: [HogehogeModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
