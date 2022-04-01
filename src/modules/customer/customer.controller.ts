import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Customer } from '@prisma/client';
import { CustomerService } from './customer.service';
import { CustomerDTO } from '../../types/dtos/customer/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customerService.getAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Customer> {
    return await this.customerService.getOne(params.id);
  }
  @Get(':id/schedules')
  async findOnewishSchedules(@Param() params): Promise<Customer> {
    return await this.customerService.getOneWithSchedules(params.id);
  }

  @Post()
  async create(@Body() body: CustomerDTO): Promise<Customer> {
    return await this.customerService.create(body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Customer> {
    return await this.customerService.delete(params.id);
  }

  @Patch(':id')
  async update(@Param() params, @Body() body: CustomerDTO): Promise<Customer> {
    return await this.customerService.update(params.id, body);
  }
}
