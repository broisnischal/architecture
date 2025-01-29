import { Global, Module } from '@nestjs/common';
import { YcI18nService } from './yc-i18n.service';

// Make the module global so that we don't have
// to import it into every other module that needs it.
@Global()
@Module({
  providers: [YcI18nService],
  exports: [YcI18nService],
})
export class YcI18nModule {}
