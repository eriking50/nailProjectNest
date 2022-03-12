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
import { CustomerDTO } from './dto/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.getAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Customer> {
    return this.customerService.getOne(params.id);
  }

  @Post()
  async create(@Body() body: CustomerDTO): Promise<Customer> {
    return this.customerService.create(body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Customer> {
    return this.customerService.delete(params.id);
  }

  @Patch(':id')
  async update(@Param() params, @Body() body: CustomerDTO): Promise<Customer> {
    return this.customerService.update(params.id, body);
  }
}
