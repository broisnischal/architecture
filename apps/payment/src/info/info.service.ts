import { Injectable } from '@nestjs/common';
import { YcI18nService } from '../yc-i18n/yc-i18n.service';

@Injectable()
export class InfoService {
  constructor(private readonly i18n: YcI18nService) {}

  getInfo() {
    return this.i18n.t('common.testing');
  }
}
