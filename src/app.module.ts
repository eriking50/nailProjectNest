import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { ScheduleModule } from './modules/schedule/schedule.module';
import { TypeModule } from './modules/type/type.module';

@Module({
  imports: [CustomerModule, ScheduleModule, TypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
