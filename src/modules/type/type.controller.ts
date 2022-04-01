import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Type } from '@prisma/client';
import { TypeDTO } from './dto/type.dto';
import { TypeUpdateDTO } from './dto/typeUpdate.dto';
import { TypeService } from './type.service';

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
  async create(@Body() body: TypeDTO): Promise<Type> {
    return await this.typeService.create(body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Type> {
    return await this.typeService.delete(params.id);
  }

  @Patch(':id')
  async update(
    @Param() params,
    @Body() body: TypeUpdateDTO,
  ): Promise<Type> {
    return await this.typeService.update(params.id, body);
  }
}
