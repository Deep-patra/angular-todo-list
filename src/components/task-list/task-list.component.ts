import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ITask } from 'src/types/task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: ITask[] = []
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>()

  deleteTask(id: string) {
    this.onDelete.emit(id) // emit the delete event
  }
}
