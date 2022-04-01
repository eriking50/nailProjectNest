import { ApiPropertyOptional } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class TypeUpdateDTO {
  @MinLength(3, {
    message: 'O nome do tipo de serviço deve ter no mínimo 3 caracteres',
  })
  @ApiPropertyOptional({
    description: 'Nome do tipo de serviço',
  })
  name: string;
}
