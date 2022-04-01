import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, MinLength } from 'class-validator';

export class CustomerDTO {
  @IsDefined({
    message: 'O nome do cliente deve ser informado',
  })
  @MinLength(3, {
    message: 'O nome do cliente deve ter no mínimo 3 caracteres',
  })
  @ApiProperty({
    description: 'Nome do cliente',
  })
  name: string;

  @IsDefined({
    message: 'O telefone do cliente deve ser informado',
  })
  @MinLength(10, {
    message:
      'O telefone do cliente deve ter no mínimo 10 caracteres informando o DDD',
  })
  @ApiProperty({
    description: 'Telefone do cliente',
  })
  phone: string;
}
