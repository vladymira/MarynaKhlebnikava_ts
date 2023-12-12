import { record } from "./recordType";

export function displayLS(name: string, form: HTMLFormElement| null){    

    const summury = document.getElementById("summary") as HTMLElement;
    summury.innerHTML = '';    
        
    if(localStorage.getItem(name)){

        const tasks= JSON.parse(localStorage.getItem(name)|| '[]');
        //tasks.map((el: { key: string }) => document.getElementById('p')[0].innerHTML += JSON.stringify(el) + ' ');
       
        for (const task of tasks){            
            let p = document.createElement('p');
            p.setAttribute('id', 'summary')
            p.textContent = JSON.stringify(task);            
            summury.appendChild(p);
        }

    } 

}

