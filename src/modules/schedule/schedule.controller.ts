import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Schedule } from '@prisma/client';
import {
  makeValidationCreate,
  makeValidationUpdate,
} from 'src/helpers/validation/validationPipes';
import { ScheduleDTO } from '../../types/dtos/schedule/schedule.dto';
import { ScheduleUpdateDTO } from '../../types/dtos/schedule/scheduleUpdate.dto';
import { ScheduleService } from './schedule.service';

@ApiTags('schedules')
@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Get('date/:date')
  async findAllByDate(@Param() params, @Query() query): Promise<Schedule[]> {
    const response = await this.scheduleService.getAllByDate(
      params.date,
      query.type,
    );
    return response;
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Schedule> {
    const response = await this.scheduleService.getOne(params.id);
    if (response) {
      return response;
    }
  }

  @Post()
  @UsePipes(makeValidationCreate())
  async create(@Body() body: ScheduleDTO): Promise<Schedule> {
    return await this.scheduleService.create(body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Schedule> {
    return await this.scheduleService.delete(params.id);
  }

  @Patch(':id')
  @UsePipes(makeValidationUpdate())
  async update(
    @Param() params,
    @Body() body: ScheduleUpdateDTO,
  ): Promise<Schedule> {
    return await this.scheduleService.update(params.id, body);
  }
}
