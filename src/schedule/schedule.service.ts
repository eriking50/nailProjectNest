import { Injectable } from '@nestjs/common';
import { Schedule } from '@prisma/client';
import { getParamDate } from 'src/helpers/dateHelper';
import { PrismaService } from 'src/prisma/prisma.service';
import { ScheduleDTO } from './dto/schedule.dto';
import { ScheduleUpdateDTO } from './dto/scheduleUpdate.dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}
  async getOne(id: string): Promise<Schedule> {
    return this.prisma.schedule.findFirst({
      where: { id },
      include: {
        customer: true,
      },
    });
  }

  async getAllByDate(date: string): Promise<Schedule[]> {
    const baseDate = getParamDate(date);
    const nextDate = new Date(baseDate.getTime());
    nextDate.setDate(baseDate.getDate() + 1);
    return this.prisma.schedule.findMany({
      where: {
        scheduleDate: {
          gte: baseDate,
          lt: nextDate,
        },
      },
      include: {
        customer: true,
      },
    });
  }

  async create(scheduleData: ScheduleDTO): Promise<Schedule> {
    return this.prisma.schedule.create({
      data: scheduleData,
    });
  }

  async delete(id: string): Promise<Schedule> {
    return this.prisma.schedule.delete({
      where: { id },
    });
  }

  async update(id: string, scheduleData: ScheduleUpdateDTO): Promise<Schedule> {
    return this.prisma.schedule.update({
      data: scheduleData,
      where: { id },
    });
  }
}
