import { NestFactory } from '@nestjs/core';
import { MobileModule } from './mobile.module';

async function bootstrap() {
  const app = await NestFactory.create(MobileModule);
  await app.listen(process.env.port ?? 4000);
}
bootstrap();
