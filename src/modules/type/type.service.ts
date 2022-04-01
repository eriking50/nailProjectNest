import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Type } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { TypeDTO } from '../../types/dtos/type/type.dto';
import { TypeUpdateDTO } from '../../types/dtos/type/typeUpdate.dto';

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}
  async getOne(id: string): Promise<Type> {
    return this.prisma.type.findFirst({
      where: { id },
    });
  }

  getAll(): Promise<Type[]> {
    return this.prisma.type.findMany();
  }

  create(typeData: TypeDTO): Promise<Type> {
    return this.prisma.type.create({
      data: typeData,
    });
  }

  async delete(id: string): Promise<Type> {
    const type = await this.prisma.type.findFirst({
      where: { id },
    });
    if (!type) {
      throw new HttpException(
        {
          error: 'Id de tipo não encontrado',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.prisma.type.delete({
      where: { id },
    });
  }

  async update(id: string, typeData: TypeUpdateDTO): Promise<Type> {
    const customer = await this.prisma.customer.findFirst({
      where: { id },
    });
    if (!customer) {
      throw new HttpException(
        {
          error: 'Id de cliente não encontrado',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.prisma.type.update({
      data: typeData,
      where: { id },
    });
  }
}
