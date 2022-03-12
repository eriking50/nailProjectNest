export type ParsedDate = {
  baseDate: Date;
  nextDate: Date;
};

export default class DateHelper {
  static getParamDate = (date: string): ParsedDate => {
    const [day, month, year, type] = date.split('-');
    const paramDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
    );
    let baseDate: Date;
    let nextDate: Date;
    switch (type) {
      case 'day':
        baseDate = new Date(paramDate.getTime());
        nextDate = new Date(paramDate.getTime());
        nextDate.setDate(paramDate.getDate() + 1);
        return {
          baseDate,
          nextDate,
        };
      case 'week':
        baseDate = new Date(paramDate.getTime());
        nextDate = new Date(paramDate.getTime());
        if (baseDate.getDay() !== 0) {
          baseDate.setDate(baseDate.getDate() - paramDate.getDay());
        }
        nextDate.setDate(baseDate.getDate() + 7);
        return {
          baseDate,
          nextDate,
        };
      case 'month':
        baseDate = new Date(paramDate.getFullYear(), paramDate.getMonth(), 1);
        nextDate = new Date(
          paramDate.getFullYear(),
          paramDate.getMonth() + 1,
          0,
        );
        return {
          baseDate,
          nextDate,
        };

      default:
        throw new Error('Data inválida');
    }
  };
}
