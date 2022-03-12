import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Schedule } from '@prisma/client';
import { ScheduleDTO } from './dto/schedule.dto';
import { ScheduleUpdateDTO } from './dto/scheduleUpdate.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Get(':date')
  async findAll(@Param() params): Promise<Schedule[]> {
    return this.scheduleService.getAllByDate(params.date);
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Schedule> {
    return this.scheduleService.getOne(params.id);
  }

  @Post()
  async create(@Body() body: ScheduleDTO): Promise<Schedule> {
    return this.scheduleService.create(body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Schedule> {
    return this.scheduleService.delete(params.id);
  }

  @Patch(':id')
  async update(
    @Param() params,
    @Body() body: ScheduleUpdateDTO,
  ): Promise<Schedule> {
    return this.scheduleService.update(params.id, body);
  }
}
