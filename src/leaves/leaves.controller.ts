import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LeavesService } from './leaves.service';

@Controller('leaves')
export class LeavesController {
    constructor(private readonly leaveSerice: LeavesService){}

    @Get()
    getLeaves(){
        return this.leaveSerice.getLeaves()
    }

    @Post()
    createLeave(@Body() leaveData){
        return this.leaveSerice.createLeaves(leaveData);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.leaveSerice.deleteLeave(+id);
    }
}
