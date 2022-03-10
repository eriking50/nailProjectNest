import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ScheduleDTO } from './dto/schedule.dto';
import { ScheduleUpdateDTO } from './dto/scheduleUpdate.dto';
import { Schedule, ScheduleService } from './schedule.service';

@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}
  @Get()
  findAll(): Schedule[] {
    return this.scheduleService.getAll();
  }

  @Get(':id')
  findOne(@Param() params): Schedule[] {
    return this.scheduleService.getOne(params.id);
  }

  @Post()
  create(@Body() body: ScheduleDTO): Schedule[] {
    return this.scheduleService.create(body);
  }

  @Delete(':id')
  delete(@Param() params): void {
    return this.scheduleService.delete(params.id);
  }

  @Patch(':id')
  update(@Param() params, @Body() body: ScheduleUpdateDTO): Schedule[] {
    return this.scheduleService.update(params.id, body);
  }
}
