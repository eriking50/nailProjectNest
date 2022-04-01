import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class TypeDTO {
  @MinLength(3, {
    message: 'O nome do tipo de serviço deve ter no mínimo 3 caracteres',
  })
  @ApiProperty({
    description: 'Nome do tipo de serviço',
  })
  name: string;
}
