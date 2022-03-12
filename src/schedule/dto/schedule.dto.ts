import { Status, Type } from '@prisma/client';

export class ScheduleDTO {
  scheduleDate: Date;
  title: string;
  price: number;
  type: Type;
  status: Status;
  customerId: string;
}
