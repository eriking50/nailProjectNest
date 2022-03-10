import { ScheduleStatus } from './enum/ScheduleStatus';
import { ScheduleType } from './enum/ScheduleType';

export class ScheduleUpdateDTO {
  date?: Date;
  price?: number;
  type?: ScheduleType;
  status?: ScheduleStatus;
  customerId?: number;
}
