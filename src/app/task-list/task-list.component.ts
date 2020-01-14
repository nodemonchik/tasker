import { Component, OnInit } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {id: 1, title: 'task1', description: 'any text'},
    {id: 2, title: 'task2', description: 'any text'},
    {id: 3, title: 'task3', description: 'any text'}
  ];

  constructor() { }

  ngOnInit() {
  }

  updateTasks(task: Task) {
    console.log(task);
    this.tasks.unshift(task);
  }

}
