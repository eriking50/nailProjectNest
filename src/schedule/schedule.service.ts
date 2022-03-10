import { Injectable } from '@nestjs/common';
import { ScheduleStatus } from './dto/enum/ScheduleStatus';
import { ScheduleType } from './dto/enum/ScheduleType';
import { ScheduleDTO } from './dto/schedule.dto';
import { ScheduleUpdateDTO } from './dto/scheduleUpdate.dto';

export type Schedule = {
  id: number;
  date: Date;
  price: number;
  type: ScheduleType;
  status: ScheduleStatus;
  customerId: number;
};

const database: Schedule[] = [
  {
    id: 1,
    date: new Date(),
    price: 15,
    type: ScheduleType.MANICURE,
    status: ScheduleStatus.PAGO,
    customerId: 1,
  },
  {
    id: 2,
    date: new Date(),
    price: 20,
    type: ScheduleType.MANICUREPEDICURE,
    status: ScheduleStatus.PAGO,
    customerId: 2,
  },
  {
    id: 3,
    date: new Date(),
    price: 50,
    type: ScheduleType.MANUTENCAO,
    status: ScheduleStatus.PAGO,
    customerId: 2,
  },
  {
    id: 4,
    date: new Date(),
    price: 15,
    type: ScheduleType.PEDICURE,
    status: ScheduleStatus.PAGO,
    customerId: 1,
  },
];

@Injectable()
export class ScheduleService {
  getOne(id: string): Schedule[] {
    const customer = database.filter((data) => parseInt(id) === data.id);
    if (customer) {
      return customer;
    }
  }

  getAll() {
    return database;
  }

  create(scheduleData: ScheduleDTO): Schedule[] {
    const lastId = database[database.length - 1].id;
    database.push({ ...scheduleData, id: lastId + 1 });
    return database.filter((data) => lastId + 1 === data.id);
  }

  delete(id: string): void {
    const deleteIndex = database.findIndex((data) => data.id === parseInt(id));
    if (deleteIndex) {
      database.splice(deleteIndex, 1);
    }
  }

  update(id: string, scheduleData: ScheduleUpdateDTO): Schedule[] {
    const updateIndex = database.findIndex((data) => data.id === parseInt(id));
    const customer = {
      ...database[updateIndex],
      ...scheduleData,
      id: parseInt(id),
    };
    if (updateIndex) {
      database.splice(updateIndex, 1, customer);
    }
    return [customer];
  }
}
