import { Status, Type } from '@prisma/client';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class ScheduleDTO {
  @IsDateString(
    {},
    {
      message: 'Informe uma data válida',
    },
  )
  scheduleDate: Date;

  @IsNotEmpty({
    message: 'O título não pode ser vazio',
  })
  title: string;

  @IsNumber(
    {},
    {
      message: 'Informe um preço usando um tipo number',
    },
  )
  price: number;

  @IsNotEmpty({
    message: 'O id do tipo não pode ser vazio',
  })
  typeId: string;

  @IsEnum(Status, {
    message:
      "Informe o status considerando as seguintes opções: 'SCHEDULED','RESCHEDULED','PAID','DEBT'",
  })
  status: Status;

  @IsNotEmpty({
    message: 'O id do cliente não pode ser vazio',
  })
  customerId: string;
}