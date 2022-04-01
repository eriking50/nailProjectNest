import { Module } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';

@Module({
  imports: [],
  controllers: [TypeController],
  providers: [TypeService, PrismaService],
})
export class TypeModule {}
