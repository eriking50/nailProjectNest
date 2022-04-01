import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomerDTO } from '../../types/dtos/customer/customer.dto';
import { CustomerUpdateDTO } from '../../types/dtos/customer/customerUpdate.dto';
import { Customer } from '@prisma/client';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async getOne(id: string): Promise<Customer> {
    return this.prisma.customer.findFirst({
      where: { id },
    });
  }

  getAll(): Promise<Customer[]> {
    return this.prisma.customer.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  getOneWithSchedules(id: string): Promise<Customer> {
    return this.prisma.customer.findFirst({
      where: { id },
      include: {
        schedules: true,
      },
    });
  }

  create(customerData: CustomerDTO): Promise<Customer> {
    return this.prisma.customer.create({
      data: customerData,
    });
  }

  async delete(id: string): Promise<Customer> {
    const customer = this.prisma.customer.findFirst({
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

    return this.prisma.customer.delete({
      where: { id },
    });
  }

  async update(id: string, customerData: CustomerUpdateDTO): Promise<Customer> {
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

    return this.prisma.customer.update({
      data: customerData,
      where: { id },
    });
  }
}
