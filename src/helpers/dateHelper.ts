export const getParamDate = (date: string): Date => {
  const [day, month, year] = date.split('-');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
