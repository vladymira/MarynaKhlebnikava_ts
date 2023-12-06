import { record } from "./recordType";

// способы найти форму
 const test1 = document.getElementsByName('test')[0];  // этот способ плох - в ts не подходит для дальнейшего new FormData, djpdhfoftn NodeList 
 const test2 = document.forms.namedItem('test');
// const test3 = document.forms.test; // тоже не годится для ts

if(test2) 
{ 
    const button  = document.getElementsByName('button')[0];
    
   
    button?.addEventListener('click', (event) => {   
        event.preventDefault();
  
        //объект, представляющий данные HTML формы
        const formData = new FormData(test2);
        const todoText = String(formData.get('todo')).trim();         
        let listTodo: Array<record> = [];

        listTodo.push({ task: todoText, data: (new Date()).toLocaleString()});

        localStorage.setItem('tasks', JSON.stringify(listTodo));


        let p = document.createElement('p');
	    p.textContent = localStorage.getItem('tasks');
        test2.appendChild(p);       
        let resetForm = <HTMLFormElement>document.getElementById('todo');
        debugger;
        resetForm.reset();        
            
})
}



