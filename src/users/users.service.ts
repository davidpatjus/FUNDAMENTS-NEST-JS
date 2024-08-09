import { Injectable } from '@nestjs/common';

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
}
