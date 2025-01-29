import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { InfoModule } from './info/info.module';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
  // I18nYamlLoader,
} from 'nestjs-i18n';
import * as path from 'node:path';
import { ConfigModule } from '@nestjs/config';
import { envService } from 'libs/external/env.config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { YcI18nModule } from '@app/common/yc-i18n/yc-i18n.module';
import { CommonModule } from '@app/common/common.module';

@Module({
  imports: [
    CommonModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: envService.validateConfig,
    }),
    // ClientsModule.register([
    //   {
    //     name: 'NOTIFICATION',
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: ['amqp://localhost:5672'],
    //       queue: 'notification_queue',
    //       queueOptions: {
    //         // durable: false,
    //       },
    //     },
    //   },
    // ]),
    InfoModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
