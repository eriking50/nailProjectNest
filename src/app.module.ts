import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [CustomerModule, ScheduleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
