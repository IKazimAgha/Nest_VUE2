import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leaves } from './leaves.entity';


@Injectable()
export class LeavesService {
    constructor(
        @InjectRepository(Leaves) private readonly leaveRepo: Repository<Leaves>,
    ){}

    async createLeaves(data){
        const newLeave = await this.leaveRepo.create(data);
        return this.leaveRepo.save(newLeave)
    }

    async getLeaves(){
        return await this.leaveRepo.find();
    }

    async deleteLeave(id){
        const delete_department = await this.leaveRepo.delete(id)
        return delete_department
    }
}
