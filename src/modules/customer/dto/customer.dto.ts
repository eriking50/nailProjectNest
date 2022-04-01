import { IsNotEmpty } from 'class-validator';

export class CustomerDTO {
  @IsNotEmpty({
    message: 'O nome do cliente não pode ser vazio',
  })
  name: string;

  @IsNotEmpty({
    message: 'O telefone do cliente não pode ser vazio',
  })
  phone: string;
}
