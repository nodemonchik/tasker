import { Component, OnInit } from '@angular/core';
import { Task } from '../app.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
  }

}
