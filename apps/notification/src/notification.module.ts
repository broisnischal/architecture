import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { CommonModule } from '@app/common';

@Module({
  imports: [CommonModule],
  controllers: [NotificationController],
  providers: [NotificationService],
  // providers: [
  //   {
  //     provide: 'NOTIFICATION',
  //     useClass: NotificationService,
  //   },
  // ],
  // exports: ['NOTIFICATION'],
})
export class NotificationModule {}
