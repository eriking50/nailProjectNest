import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { ScheduleModule } from './schedule/schedule.module';
import { TypeModule } from './type/type.module';

@Module({
  imports: [CustomerModule, ScheduleModule, TypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
