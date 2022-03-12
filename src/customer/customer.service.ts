import { Injectable } from '@nestjs/common';
import { CustomerDTO } from './dto/customer.dto';
import { CustomerUpdateDTO } from './dto/customerUpdate.dto';
import { Customer } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}
  async getOne(id: string): Promise<Customer> {
    return this.prisma.customer.findFirst({
      where: { id },
    });
  }

  getAll(): Promise<Customer[]> {
    return this.prisma.customer.findMany();
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

  delete(id: string): Promise<Customer> {
    return this.prisma.customer.delete({
      where: { id },
    });
  }

  update(id: string, customerData: CustomerUpdateDTO): Promise<Customer> {
    return this.prisma.customer.update({
      data: customerData,
      where: { id },
    });
  }
}
