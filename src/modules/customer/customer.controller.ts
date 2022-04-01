import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { Customer } from '@prisma/client';
import { CustomerService } from './customer.service';
import { CustomerDTO } from '../../types/dtos/customer/customer.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { CustomerUpdateDTO } from 'src/types/dtos/customer/customerUpdate.dto';
import {
  makeValidationCreate,
  makeValidationUpdate,
} from 'src/helpers/validation/validationPipes';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Get()
  async findAll(): Promise<Customer[]> {
    return await this.customerService.getAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async findOne(@Param() params): Promise<Customer> {
    return await this.customerService.getOne(params.id);
  }

  @Get(':id/schedules')
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async findOnewishSchedules(@Param() params): Promise<Customer> {
    return await this.customerService.getOneWithSchedules(params.id);
  }

  @Post()
  @UsePipes(makeValidationCreate())
  @ApiBody({
    type: CustomerDTO,
  })
  async create(@Body() body: CustomerDTO): Promise<Customer> {
    return await this.customerService.create(body);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  async delete(@Param() params): Promise<Customer> {
    return await this.customerService.delete(params.id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: 'string',
  })
  @ApiBody({
    type: CustomerUpdateDTO,
  })
  @UsePipes(makeValidationUpdate())
  async update(
    @Param() params,
    @Body() body: CustomerUpdateDTO,
  ): Promise<Customer> {
    return await this.customerService.update(params.id, body);
  }
}
