import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LeavesService } from './leaves.service';

@Controller('leaves')
export class LeavesController {
    constructor(
        private readonly leaveSerice: LeavesService,
        private readonly userService: UsersService,
    ){}

    @Get(':id')
    async getLeaves(@Param("id") id:string){
        console.log("{userData}", id)
        const user = await this.userService.findOne(id);
        console.log({user})
        return this.leaveSerice.getLeavesByUserEmail(user)
    }

    @Post()
    async createLeave(@Body() leaveData){
        const user = await this.userService.findOne(leaveData.users);
        console.log({user})
        leaveData.users = user.id;
        return this.leaveSerice.createLeaves(leaveData);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.leaveSerice.deleteLeave(+id);
    }
}
