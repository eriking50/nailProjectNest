import { HttpException, HttpStatus } from '@nestjs/common';

export type ParsedDate = {
  startDate: Date;
  endDate: Date;
};

export default class DateHelper {
  static getParamDate = (date: string): ParsedDate => {
    const [day, month, year, type] = date.split('-');
    const paramDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
    );
    if (isNaN(paramDate.getTime())) {
      throw new HttpException(
        {
          error:
            "Data inválida, a forma correta é dd-mm-yyyy-tipo de busca ('day', 'week' ou 'month')",
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    let startDate: Date;
    let endDate: Date;
    switch (type) {
      case 'day':
        startDate = new Date(paramDate.getTime());
        endDate = new Date(paramDate.getTime());
        endDate.setDate(paramDate.getDate() + 1);
        return {
          startDate,
          endDate,
        };
      case 'week':
        startDate = new Date(paramDate.getTime());
        endDate = new Date(paramDate.getTime());
        if (startDate.getDay() !== 0) {
          startDate.setDate(startDate.getDate() - paramDate.getDay());
        }
        endDate.setDate(startDate.getDate() + 7);
        return {
          startDate,
          endDate,
        };
      case 'month':
        startDate = new Date(paramDate.getFullYear(), paramDate.getMonth(), 1);
        endDate = new Date(
          paramDate.getFullYear(),
          paramDate.getMonth() + 1,
          1,
        );
        return {
          startDate,
          endDate,
        };

      default:
        throw new HttpException(
          {
            error: 'Tipo de Data Inválida',
          },
          HttpStatus.BAD_REQUEST,
        );
    }
  };
}
