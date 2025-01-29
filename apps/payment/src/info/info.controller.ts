import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';
@Controller('info')
export class InfoController {
  constructor(private readonly service: InfoService) {}

  @Get('about')
  getAbout() {
    return this.service.getInfo();
  }

  @Get('notification')
  sendNotification() {
    return this.service.sendNotification();
  }
}
