import { HttpException, HttpStatus } from '@nestjs/common';
import { DateTime } from 'luxon';

export type ParsedDate = {
  startDate: Date;
  endDate: Date;
};

export default class DateHelper {
  static getParamDate = (paramsDate: string, queryType: string): ParsedDate => {
    const date = DateTime.fromISO(paramsDate);
    if (!date.isValid) {
      throw new HttpException(
        {
          error: 'Data inválida, a forma correta é yyyy-mm-dd, ex: 2020-10-01',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    let startDate: DateTime;
    let endDate: DateTime;

    switch (queryType) {
      case 'day':
        startDate = DateTime.fromISO(paramsDate);
        endDate = startDate.plus({ days: 1 }).minus({ seconds: 1 });
        return {
          startDate: startDate.toJSDate(),
          endDate: endDate.toJSDate(),
        };
      case 'week':
        startDate = DateTime.fromISO(paramsDate);
        console.log(startDate.weekday);
        if (startDate.weekday !== 7) {
          startDate = startDate.plus({ days: date.weekday });
        }
        endDate = startDate.plus({ days: 7 }).minus({ seconds: 1 });
        return {
          startDate: startDate.toJSDate(),
          endDate: endDate.toJSDate(),
        };
      case 'month':
        startDate = DateTime.fromISO(paramsDate).minus({ days: date.day - 1 });
        endDate = startDate.plus({ months: 1 }).minus({ seconds: 1 });
        return {
          startDate: startDate.toJSDate(),
          endDate: endDate.toJSDate(),
        };

      default:
        throw new HttpException(
          {
            error: 'Tipo de Data Inválida, use day, week ou month',
          },
          HttpStatus.BAD_REQUEST,
        );
    }
  };
}
