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
  @Get('date/:date')
  async findAllByDate(@Param() params): Promise<Schedule[]> {
    const response = await this.scheduleService.getAllByDate(params.date);
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
  async create(@Body() body: ScheduleDTO): Promise<Schedule> {
    return await this.scheduleService.create(body);
  }

  @Delete(':id')
  async delete(@Param() params): Promise<Schedule> {
    return await this.scheduleService.delete(params.id);
  }

  @Patch(':id')
  async update(
    @Param() params,
    @Body() body: ScheduleUpdateDTO,
  ): Promise<Schedule> {
    return await this.scheduleService.update(params.id, body);
  }
}
