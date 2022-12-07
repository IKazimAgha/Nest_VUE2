import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeavesController } from './leaves.controller';
import { Leaves } from './leaves.entity';
import { LeavesService } from './leaves.service';

@Module({
  imports: [TypeOrmModule.forFeature([Leaves]),],
  controllers: [LeavesController],
  providers: [LeavesService]
})
export class LeavesModule {}
