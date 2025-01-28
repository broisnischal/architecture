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
import { YcI18nModule } from './yc-i18n/yc-i18n.module';
import * as path from 'node:path';

@Module({
  imports: [
    InfoModule,
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      // loader: I18nYamlLoader,
      loaderOptions: {
        path: path.join(__dirname, '/locales/'),
        watch: true,
      },
      resolvers: [
        AcceptLanguageResolver,
        { use: HeaderResolver, options: ['x-lang'] },
      ],
      typesOutputPath: './apps/payment/src/generated/i18n.generated.ts',
    }),
    YcI18nModule,
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
