import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-todo';
  name:string;
  tasks:Task[];
  constructor(){
    this.tasks = [];
  }
 addTask(data):void{

    console.log("Clicked"+data);
    let task:Task={
      id : '',
      name:''
    };
    if(data.key == 'Enter'){
      task.name = this.name;
      console.log(task.name);
      this.tasks.push(task);
      this.name='';
      console.log("End");
    }
  }

}
