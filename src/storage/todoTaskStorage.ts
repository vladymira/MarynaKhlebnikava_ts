import { Task } from "../models/Task";
import { BrowserLocalStorage } from "./BrowserLocaleStorage";

export const todoTaskStorage = new BrowserLocalStorage<Task, Task['id']>(
    'TODO.TASKS',
    ()=> crypto.randomUUID(),

);

