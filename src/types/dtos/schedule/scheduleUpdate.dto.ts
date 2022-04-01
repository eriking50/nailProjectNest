import { ApiPropertyOptional } from '@nestjs/swagger';
import { Status } from '@prisma/client';
import { IsDateString, IsEnum, IsNumber, MinLength } from 'class-validator';

export class ScheduleUpdateDTO {
  @IsDateString(
    {},
    {
      message: 'Informe uma data válida',
    },
  )
  @ApiPropertyOptional({
    description: 'Data do agendamento',
  })
  scheduleDate: Date;

  @MinLength(3, {
    message: 'O título do agendamento deve ter no mínimo 3 caracteres',
  })
  @ApiPropertyOptional({
    description: 'Título do agendamento',
  })
  title: string;

  @IsNumber(
    {},
    {
      message: 'Informe um preço usando um tipo number',
    },
  )
  @ApiPropertyOptional({
    description: 'Preço do agendamento',
    type: Number,
  })
  price: number;

  @MinLength(3, {
    message: 'O Id do tipo de serviço deve ter no mínimo 3 caracteres',
  })
  @ApiPropertyOptional({
    description: 'Id do tipo de serviço',
  })
  typeId: string;

  @IsEnum(Status, {
    message:
      "Informe o status considerando as seguintes opções: 'SCHEDULED','RESCHEDULED','PAID','DEBT'",
  })
  @ApiPropertyOptional({
    description: 'Status do agendamento',
  })
  status: Status;
}
