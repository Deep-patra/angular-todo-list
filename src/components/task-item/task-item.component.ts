import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/types/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() index: number = 0
  @Input() task?: ITask
  @Output() onDelete: EventEmitter<string> = new EventEmitter(true)

  handleDelete() {
    this.task && this.onDelete.emit(this.task.id)
  }
}
