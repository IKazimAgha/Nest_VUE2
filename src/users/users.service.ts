import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly userRepo: Repository<Users>
  ){}

  async create(createUserDto: CreateUserDto) {
    const users = await this.userRepo.create(createUserDto);
    return this.userRepo.save(users);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(email: string) {
    return this.userRepo.findOne({
      where: {
        email: email
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
