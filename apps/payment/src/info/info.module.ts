import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { YcI18nService } from '@app/common/yc-i18n/yc-i18n.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'notification_queue',
        },
      },
    ]),
  ],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
