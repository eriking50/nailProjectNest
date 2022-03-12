export default class DateHelper {
  static getParamDate = (date: string): Date => {
    const [day, month, year] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };
}
