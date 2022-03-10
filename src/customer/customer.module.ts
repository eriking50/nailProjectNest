import { Module } from '@nestjs/common';
import { CustomerContoller } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  imports: [],
  controllers: [CustomerContoller],
  providers: [CustomerService],
})
export class CustomerModule {}
