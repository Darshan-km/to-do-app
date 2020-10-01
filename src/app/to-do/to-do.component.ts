import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ToDo } from './to-do';
 
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  public title = "To Do application"
  public toDoObj = new ToDo();
  ngOnInit(): void {
      this.toDoObj.display();
  }

}
