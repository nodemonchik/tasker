import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Task> = new EventEmitter();

  title = '';
  description = '';

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    const task: Task = {
      title: this.title,
      description: this.description
    };
    this.onAdd.emit(task);

    this.title = this.description = '';
  }

}
