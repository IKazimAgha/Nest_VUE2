import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { LeavesController } from 'src/leaves/leaves.controller';
import { LeavesService } from 'src/leaves/leaves.service';
import { Leaves } from 'src/leaves/leaves.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, Leaves])],
  controllers: [UsersController, LeavesController],
  providers: [UsersService, LeavesService],
  exports: [UsersService]
})
export class UsersModule {}
