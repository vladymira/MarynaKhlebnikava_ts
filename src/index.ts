import { displayLS } from "./displayLS";
import { record } from "./recordType";

//////////////// три способа найти форму
const test1 = document.getElementsByName('test')[0];  // этот способ плох - в ts не подходит для дальнейшего new FormData, возвращает NodeList 
const test2 = document.forms.namedItem('test');
 //const test3 = document.forms.test; // тоже не годится для ts(Property 'test' does not exist on type 'HTMLCollectionOf<HTMLFormElement>')


const data = localStorage.getItem('tasks');
const listTodo: Array<record> = JSON.parse(data || '{}');

//выводим список из хранилища при первом входе/обновлении страницы
displayLS('tasks', test2);
  

if (test2) {
    const button = document.getElementsByName('button')[0];

    button?.addEventListener('click', (event) => {
        event.preventDefault();

        //объект, представляющий данные HTML формы
        const formData = new FormData(test2);
        // считываем значение input
        const todoText = String(formData.get('todo')).trim();
        
        //дбавляем задачу в список задач  
        listTodo.push({ task: todoText, data: (new Date()).toLocaleString() });

        // перезаписываем этот список в хранилище
        localStorage.setItem('tasks', JSON.stringify(listTodo));

       // выводим список из хранилища
        displayLS('tasks', test2);
        
        // очищаем инпут
        (document.getElementById('todo') as HTMLInputElement).value = '';          
    });
}



