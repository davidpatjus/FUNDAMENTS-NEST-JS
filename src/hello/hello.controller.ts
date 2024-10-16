import { Controller, Get, HttpCode, Param, Req, Res, Query, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('')
export class HelloController {

    @Get('/')
    index( @Req() request: Request, @Res() response: Response ) {
        response.status(200).send('Hello World!');
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 Not Found Route!!';
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return '500 Error Route!!';
    }

    @Get('ticket/:num')
    getNumber( @Param('num') num: number ) {
      return num;  
    }

    @Get('active/:status')
    ifUserActive( @Param('status') status: boolean ) {
        console.log(typeof status + status);
        if (status) {
            return 'User is Active';
        } else {
            return 'User is Inactive';
        }
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet( @Query() query: {name: string, age: number} ) { ;
        return `Hello ${query.name}, You are ${query.age} years old!`;
    }

    
}
