import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import {
  AcceptLanguageResolver,
  HeaderResolver,
  I18nModule,
} from 'nestjs-i18n';
import { YcI18nService } from './yc-i18n/yc-i18n.service';
import { join } from 'node:path';
import { YcI18nModule } from './yc-i18n/yc-i18n.module';

@Module({
  imports: [
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: join(__dirname, '../../../libs/locales/'),
        watch: true,
      },
      resolvers: [
        AcceptLanguageResolver,
        { use: HeaderResolver, options: ['x-lang'] },
      ],
      typesOutputPath: join(
        __dirname,
        '../../../libs/generated/i18n.generated.ts',
      ),
    }),
    YcI18nModule,
  ],
  providers: [YcI18nService, CommonService],
  exports: [CommonService, YcI18nService],
})
export class CommonModule {}
