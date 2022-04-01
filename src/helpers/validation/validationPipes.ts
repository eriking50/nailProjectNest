import { ValidationPipe } from '@nestjs/common';

export const makeValidationCreate = () => {
  return new ValidationPipe();
};

export const makeValidationUpdate = () => {
  return new ValidationPipe({
    skipMissingProperties: true,
  });
};
