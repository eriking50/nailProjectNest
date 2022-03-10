import { Injectable } from '@nestjs/common';

export type Customer = {
  id?: number;
  name: string;
  phone: string;
};

const database: Customer[] = [
  { id: 1, name: 'Erik', phone: '12345678' },
  { id: 2, name: 'Helena', phone: '12345678' },
  { id: 3, name: 'Joao', phone: '12345678' },
];

@Injectable()
export class CustomerService {
  getOne(id: string): Customer[] {
    const customer = database.filter((data) => parseInt(id) === data.id);
    if (customer) {
      return customer;
    }
  }

  getAll() {
    return database;
  }

  create(customerData: Customer): Customer[] {
    const lastId = database[database.length - 1].id;
    console.log(lastId);
    database.push({ ...customerData, id: lastId + 1 });
    return database.filter((data) => lastId + 1 === data.id);
  }

  delete(id: string): void {
    const deleteIndex = database.findIndex((data) => data.id === parseInt(id));
    if (deleteIndex) {
      database.splice(deleteIndex, 1);
    }
  }

  update(id: string, customerData: Customer): Customer[] {
    const updateIndex = database.findIndex((data) => data.id === parseInt(id));
    const customer = {
      ...database[updateIndex],
      ...customerData,
      id: parseInt(id),
    };
    if (updateIndex) {
      database.splice(updateIndex, 1, customer);
    }
    return [customer];
  }
}
