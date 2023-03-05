import { Component, Input } from '@angular/core';
import { TaskServiceService as TaskService } from 'src/services/task-service.service';

interface AddTaskParams {
  title: string;
  description: string;
  endDate: Date;
  endTime: Date;
  notify: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  taskService: TaskService
  @Input() show: boolean = false

  constructor(private _taskService: TaskService) { this.taskService = _taskService }

  showAddTask(value: boolean) {
    if (value) [
      this.show = true
    ]
  }

  close() {
    this.show = false
  }

  deleteTask(id: string) {
    // delete the task
    this.taskService.removeTask(id)
  }

  addTask(params: AddTaskParams) {
    this.taskService.addTask({ ...params })
  }
}
