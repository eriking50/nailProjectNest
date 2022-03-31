import { Status, Type } from '@prisma/client';

export class ScheduleUpdateDTO {
  scheduleDate?: Date;
  title?: string;
  price?: number;
  typeId?: string;
  status?: Status;
}
