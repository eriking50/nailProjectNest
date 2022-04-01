import { ApiProperty } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import {
  IsDateString,
  IsDefined,
  IsEnum,
  IsNumber,
  MinLength,
} from 'class-validator';

export class ScheduleDTO {
  @IsDefined()
  @IsDateString(
    {},
    {
      message: 'Informe uma data válida',
    },
  )
  @ApiProperty({
    description: 'Data do agendamento',
  })
  scheduleDate: Date;

  @IsDefined()
  @MinLength(3, {
    message: 'O título do agendamento deve ter no mínimo 3 caracteres',
  })
  @ApiProperty({
    description: 'Título do agendamento',
  })
  title: string;

  @IsDefined()
  @IsNumber(
    {},
    {
      message: 'Informe um preço usando um tipo number',
    },
  )
  @ApiProperty({
    description: 'Preço do agendamento',
    type: Number,
  })
  price: number;

  @IsDefined()
  @MinLength(3, {
    message: 'O Id do tipo de serviço deve ter no mínimo 3 caracteres',
  })
  @ApiProperty({
    description: 'Id do tipo de serviço',
  })
  typeId: string;

  @IsDefined()
  @IsEnum(Status, {
    message:
      "Informe o status considerando as seguintes opções: 'SCHEDULED','RESCHEDULED','PAID','DEBT'",
  })
  @ApiProperty({
    description: 'Status do agendamento',
    enum: Status,
  })
  status: Status;

  @IsDefined()
  @MinLength(3, {
    message: 'O Id do cliente deve ter no mínimo 3 caracteres',
  })
  @ApiProperty({
    description: 'Id do cliente',
  })
  customerId: string;
}
