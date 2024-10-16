import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users: object[] = [
        {
            id: 1,
            name: 'John Doe',
            phone: '123-456-7890'
        },
        {
            id: 2,
            name: 'Jane Doe',
            phone: '123-456-7890'
        },
        {
            id: 3,
            name: 'Jim Doe',
            phone: '123-456-7890'
        }
    ];

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto) {

        this.users.push(user);

        return {
            ...user,
            id: this.users.length + 1
        }
    }
}
