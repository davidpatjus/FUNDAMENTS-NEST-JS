import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

@Controller('/tasks')
export class TasksController { 

    constructor(private tasksService: TasksService) {}
    
    @Get()
    getAllTasks(@Query() query: any) {
        console.log(query);
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask( @Param('id') id: string ) {
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    // Asi podemos usar el pipe de validacion para un endpoint especifico
    // @UsePipes(new ValidationPipe())
    postTask(@Body() task: CreateTaskDto) {
        return this.tasksService.CreateTask(task);
    }

    @Put('/:id')
    putTask( @Body() task: UpdateTaskDto, @Param('id') id: string ) {
        return this.tasksService.UpdateTask(task, parseInt(id));
    }

    @Delete()
    deleteAllTasks() {
        return this.tasksService.deleteAllTasks();
    }

    @Delete('/:id')
    deleteTask( @Param('id') id: string ) {
        return this.tasksService.deleteTask(parseInt(id));
    }

    @Patch()
    patchAllTasks( @Body() task: UpdateTaskDto ) {
        return this.tasksService.patchAllTasks(task);
    }
}