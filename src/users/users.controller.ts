import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {

    constructor(private usersService: UsersService) {}    

    @Get('/users')
    getUsers() {
        return this.usersService.getUsers();
    }

    @Post('/users')
    CreateUser( @Body() user: CreateUserDto ) {
        return this.usersService.createUser(user);
    }
    
}
