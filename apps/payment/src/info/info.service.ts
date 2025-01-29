import { YcI18nService } from '@app/common/yc-i18n/yc-i18n.service';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { delay, timeout } from 'rxjs';

@Injectable()
export class InfoService {
  constructor(
    private readonly i18n: YcI18nService,
    @Inject('NOTIFICATION') private readonly notificationClient: ClientProxy,
  ) {}

  getInfo() {
    return this.i18n.t('auth.register.message.create');
  }

  sendNotification() {
    const data = this.notificationClient
      .send('notification-message', {
        message: this.i18n.t('common.about'),
        lang: this.i18n.lang(),
      })
      .pipe(timeout(1000));
    return data;
  }
}
