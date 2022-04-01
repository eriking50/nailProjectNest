import { ApiPropertyOptional } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class CustomerUpdateDTO {
  @MinLength(3, {
    message: 'O nome do cliente deve ter no mínimo 3 caracteres',
  })
  @ApiPropertyOptional({
    description: 'Nome do cliente',
  })
  name: string;

  @MinLength(10, {
    message: 'O telefone do cliente deve ter no mínimo 10 caracteres',
  })
  @ApiPropertyOptional({
    description: 'Telefone do cliente',
  })
  phone: string;
}
