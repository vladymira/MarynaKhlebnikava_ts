import { getTasks, saveTasks } from './storageUtils';
import { renderTasks } from './renderTasks';
import { Task } from './models/Task';
import { TasksModel } from './models/TasksModel';
import { todoTaskStorage } from './storage/todoTaskStorage';
import { TaskStatus } from './models/TaskStatus';

const resultsElement = document.getElementById('results')!;
const todoForm = document.forms.namedItem('todo')!;
const taskModel = new TasksModel(todoTaskStorage);

taskModel.addEventListener('change', ()=>{
    renderTasks(resultsElement, taskModel.tasks);
})

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = String(new FormData(todoForm).get('taskText') ?? '');
    const dueDate = String(new FormData(todoForm).get('date') ?? '');

    taskModel.createTask(
        {
            text,
            dueDate: new Date(dueDate).toISOString(),
            createDate: new Date().toISOString(),
            status: TaskStatus.NEW
        }
    )

    todoForm.reset();

});

renderTasks(resultsElement, taskModel.tasks);