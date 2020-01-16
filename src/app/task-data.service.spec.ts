import { TestBed, async, inject } from '@angular/core/testing';

import { TaskDataService } from './task-data.service';
import { Task } from './task';

describe('TaskDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [TaskDataService]
  }));

  it('should ...', inject([TaskDataService], (service: TaskDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTasks()', () => {
    it('should return an emty array by default', inject([TaskDataService], (service: TaskDataService) => {
      expect(service.getAllTasks()).toEqual([]);
    }));

    it('should return all tasks', inject([TaskDataService], (service: TaskDataService) => {
      const task1 = new Task({ title: 'Hello 1', completed: false });
      const task2 = new Task({ title: 'Hello 2', completed: true });
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
    }));
  });

  describe('#save(task)', () => {
    it('should automatically assign an inc id', inject([TaskDataService], (service: TaskDataService) => {
      const task1 = new Task({ title: 'Hello 1', completed: false });
      const task2 = new Task({ title: 'Hello 2', completed: true });
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getTaskById(1)).toEqual(task1);
      expect(service.getTaskById(2)).toEqual(task2);
    }));
  });

  describe('#deleteTaskById(id)', () => {
    it('should remove task by id', inject([TaskDataService], (service: TaskDataService) => {
      const task1 = new Task({ title: 'Hello 1', completed: false });
      const task2 = new Task({ title: 'Hello 2', completed: true });
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
      service.deleteTaskById(1);
      expect(service.getAllTasks()).toEqual([task2]);
      service.deleteTaskById(2);
      expect(service.getAllTasks()).toEqual([]);
    }));

    it('should not removing anything if task id not found', inject([TaskDataService], (service: TaskDataService) => {
      const task1 = new Task({ title: 'Hello 1', completed: false });
      const task2 = new Task({ title: 'Hello 2', completed: true });
      service.addTask(task1);
      service.addTask(task2);
      expect(service.getAllTasks()).toEqual([task1, task2]);
      service.deleteTaskById(3);
      expect(service.getAllTasks()).toEqual([task1, task2]);
    }));
  });

  describe('#updateTaskById(id, values)', () => {
    it('should return update task', inject([TaskDataService], (service: TaskDataService) => {
      const task = new Task({ title: 'Hello 1', completed: false });
      service.addTask(task);
      const updateTask = service.updateTaskById(1, {
        title: 'new title'
      });
      expect(updateTask.title).toEqual('new title');
    }));

    it('should return null if task not found', inject([TaskDataService], (service: TaskDataService) => {
      const task = new Task({ title: 'Hello 1', completed: false });
      service.addTask(task);
      const updateTask = service.updateTaskById(2, {
        title: 'new title'
      });
      expect(updateTask.title).toEqual(null);
    }));
  });

  describe('#toggleTaskComplete(task)', () => {
    it('should return update task with inverse complete status', inject([TaskDataService], (service: TaskDataService) => {
      const task = new Task({ title: 'Hello 1', completed: false });
      service.addTask(task);
      const updateTask = service.toggleTaskComplete(task);
      expect(updateTask.completed).toEqual(true);
      service.toggleTaskComplete(task);
      expect(updateTask.completed).toEqual(false);
    }));
  });
});
