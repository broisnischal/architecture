import { Test, TestingModule } from '@nestjs/testing';
import { MobileController } from './mobile.controller';
import { MobileService } from './mobile.service';

describe('MobileController', () => {
  let mobileController: MobileController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MobileController],
      providers: [MobileService],
    }).compile();

    mobileController = app.get<MobileController>(MobileController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mobileController.getHello()).toBe('Hello World!');
    });
  });
});
