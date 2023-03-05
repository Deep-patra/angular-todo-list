import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  @Input() show: boolean = false
  @Output() showAddTask: EventEmitter<boolean> = new EventEmitter<boolean>()

  public addTask() {
    if (!this.show) this.show = true

    // emit showAddTask Event
    this.emitAddTask()
  }

  private emitAddTask() {
    this.showAddTask.emit(true)
  }
}
