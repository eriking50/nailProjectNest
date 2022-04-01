import { ApiProperty } from '@nestjs/swagger';
import { MinLength } from 'class-validator';

export class CustomerDTO {
  @MinLength(3, {
    message: 'O nome do cliente deve ter no mínimo 3 caracteres',
  })
  @ApiProperty({
    description: 'Nome do cliente',
  })
  name: string;

  @MinLength(10, {
    message:
      'O telefone do cliente deve ter no mínimo 10 caracteres informando o DDD',
  })
  @ApiProperty({
    description: 'Telefone do cliente',
  })
  phone: string;
}
