import { Test, TestingModule } from '@nestjs/testing';
import { YcI18nService } from './yc-i18n.service';

describe('YcI18nService', () => {
  let service: YcI18nService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YcI18nService],
    }).compile();

    service = module.get<YcI18nService>(YcI18nService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
