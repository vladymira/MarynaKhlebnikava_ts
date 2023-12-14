import { AbstractStorage } from "../storage/AbstractStorage";
import { Task } from "./Task";

export class TasksModel extends EventTarget {
    readonly #storage: AbstractStorage<Task, Task['id']>

    #tasks: Task[] = [];

    constructor(storage: AbstractStorage<Task, Task['id']>) {
        super();
        this.#storage = storage;
        this.#storage.getAll().then((tasks) => {
            this.#dispathChange(tasks);
        })
    }
    get tasks(): Task[] {
        return this.#tasks;
    }

    createTask(newTask: Omit<Task, 'id'>): void {
        this.#storage.write(newTask).then((id) => {
            this.#dispathChange(this.tasks.concat(
                {
                    ...newTask,
                    id
                }
            ))
        })
    }


    #dispathChange(updatedTasks: Task[]): void {
        this.#tasks = updatedTasks;
        this.dispatchEvent(new CustomEvent('change'))
    }

}