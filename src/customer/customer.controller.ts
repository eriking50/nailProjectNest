import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Customer, CustomerService } from './customer.service';

@Controller('customer')
export class CustomerContoller {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  findAll(): Customer[] {
    return this.customerService.getAll();
  }

  @Get(':id')
  findOne(@Param() params): Customer[] {
    return this.customerService.getOne(params.id);
  }

  @Post()
  create(@Body() body): Customer[] {
    return this.customerService.create(body);
  }

  @Delete(':id')
  delete(@Param() params): void {
    return this.customerService.delete(params.id);
  }

  @Patch(':id')
  update(@Param() params, @Body() body): Customer[] {
    return this.customerService.update(params.id, body);
  }
}
