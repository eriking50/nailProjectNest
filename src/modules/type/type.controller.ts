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
import { ApiTags } from '@nestjs/swagger';
import { Type } from '@prisma/client';
import {
  makeValidationCreate,
  makeValidationUpdate,
} from 'src/helpers/validation/validationPipes';
import { TypeDTO } from '../../types/dtos/type/type.dto';
import { TypeUpdateDTO } from '../../types/dtos/type/typeUpdate.dto';
import { TypeService } from './type.service';

@ApiTags('types')
@Controller('types')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}
  @Get()
  async findAll(): Promise<Type[]> {
    const response = await this.typeService.getAll();
    return response;
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Type> {
    const response = await this.typeService.getOne(params.id);
    if (response) {
      return response;
    }
  }

  @Post()
  @UsePipes(makeValidationCreate())
  async create(@Body() body: TypeDTO): Promise<Type> {
    return await this.typeService.create(body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Type> {
    return await this.typeService.delete(params.id);
  }

  @Patch(':id')
  @UsePipes(makeValidationUpdate())
  async update(@Param() params, @Body() body: TypeUpdateDTO): Promise<Type> {
    return await this.typeService.update(params.id, body);
  }
}
