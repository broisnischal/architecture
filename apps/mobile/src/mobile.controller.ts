import { Controller, Get } from '@nestjs/common';
import { MobileService } from './mobile.service';

@Controller()
export class MobileController {
  constructor(private readonly mobileService: MobileService) {}

  @Get()
  getHello(): string {
    return this.mobileService.getHello();
  }
}
