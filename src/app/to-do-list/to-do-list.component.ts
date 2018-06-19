import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
todoForm: FormGroup;

  todoList = [
  {'date':'2014-08-12', 'task':'washroom cleaning'},
  {'date':'2014-08-12', 'task':'Exercise'},
  {'date':'2014-08-12', 'task':'walking'},
  {'date':'2014-08-12', 'task':'blood checkup'},
  {'date':'2014-08-12', 'task':'office work'},
  {'date':'2014-08-12', 'task':'gyming'}
]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  this.todoFormBuilder();
  }

todoFormBuilder() {
  this.todoForm = this.fb.group(
    {
      date:[],
      task:[]
    }
  )
}

addToDo(){
  this.todoList.push(this.todoForm.value);
}

deleteToDo(task: any){
 let index = this.todoList.findIndex(item => item.task === task);
this.todoList.splice(index,1);
}

}
