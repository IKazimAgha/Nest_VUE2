import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/entities/user.entity';
import { UsersController } from 'src/users/users.controller';
import { UsersService } from 'src/users/users.service';
import { LeavesController } from './leaves.controller';
import { Leaves } from './leaves.entity';
import { LeavesService } from './leaves.service';

@Module({
  imports: [TypeOrmModule.forFeature([Leaves]),],
  controllers: [LeavesController],
  providers: [LeavesService],
  exports: [LeavesService]
})
export class LeavesModule {}
