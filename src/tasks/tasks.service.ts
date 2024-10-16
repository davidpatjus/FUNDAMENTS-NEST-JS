import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { find } from "rxjs";

export interface task {
    title: string;
    status: boolean;
}

@Injectable()
export class TasksService {

    private tasks = []

    getTasks() {
        return this.tasks
    }

    getTask(id: number) {
        const result = this.tasks.find(task => task.id === id)

        if (!result) {
            return new NotFoundException(`Task with id ${id} not found`)
        }

        return result;
    }

    CreateTask(task: CreateTaskDto) {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    UpdateTask(task: UpdateTaskDto, id: number) {
        this.tasks = this.tasks.map(t => {
            if (t.id === id) {
                return {
                    ...t,
                    ...task
                }
            }
            return t;
        });
        return task;
    }

    deleteAllTasks() {
        this.tasks = [];
        return 'All Tasks Deleted';
    }

    deleteTask(id: number) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        return `Task with id ${id} deleted`;
    }

    patchAllTasks(task: UpdateTaskDto) {
        this.tasks.forEach(t => {
            t.title = task.title;
            t.description = task.description;
        });
        return 'Updating All Tasks';
    }
}