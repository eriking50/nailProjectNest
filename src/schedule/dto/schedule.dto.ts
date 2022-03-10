import { ScheduleStatus } from './enum/ScheduleStatus';
import { ScheduleType } from './enum/ScheduleType';

export class ScheduleDTO {
  date: Date;
  price: number;
  type: ScheduleType;
  status: ScheduleStatus;
  customerId: number;
}
