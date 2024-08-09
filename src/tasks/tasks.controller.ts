import { Controller, Get, Put } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({})
export class TasksController { 

    constructor(private tasksService: TasksService) {}
    
    @Get('/tasks')
    getAllTasks() {
        return this.tasksService.getTasks();
    }

    @Put('/tasks')
    putAllTasks() {
        return this.tasksService.getTasks();
    }
}