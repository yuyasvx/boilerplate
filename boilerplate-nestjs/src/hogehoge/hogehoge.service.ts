import { Injectable } from '@nestjs/common'

@Injectable()
export class HogehogeService {
  public do(): string {
    return 'こんにちは'
  }
}
