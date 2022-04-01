import { Injectable } from '@nestjs/common';
import { Type } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeDTO } from './dto/type.dto';
import { TypeUpdateDTO } from './dto/typeUpdate.dto';

@Injectable()
export class TypeService {
  constructor(private readonly prisma: PrismaService) {}
  async getOne(id: string): Promise<Type> {
    return this.prisma.type.findFirst({
      where: { id }
    });
  }

  async getAll(): Promise<Type[]> {
    return this.prisma.type.findMany();
  }

  async create(typeData: TypeDTO): Promise<Type> {
    return this.prisma.type.create({
      data: typeData,
    });
  }

  async delete(id: string): Promise<Type> {
    return this.prisma.type.delete({
      where: { id },
    });
  }

  async update(id: string, typeData: TypeUpdateDTO): Promise<Type> {
    return this.prisma.type.update({
      data: typeData,
      where: { id },
    });
  }
}
