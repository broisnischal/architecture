import { Controller, Headers } from '@nestjs/common';
import { NotificationService } from './notification.service';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { YcI18nService } from '@app/common/yc-i18n/yc-i18n.service';

@Controller()
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly i18n: YcI18nService,
  ) {}

  @EventPattern('notification-event')
  handleNotificationEvent(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(data);
    return this.i18n.t('auth.register.message.create');
  }

  @MessagePattern('notification-message')
  handleNotificationMessage(
    @Payload() data: any,
    @Ctx() context: RmqContext,
    @Headers() headers: any,
  ) {
    const message = this.i18n.t('auth.register.message.create', {
      lang: data.lang,
    });

    return {
      cool: message,
      about: this.i18n.t('common.about'),
    };
  }
}
