import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ITask } from 'src/types/task'


interface EmitParams {
  title: string;
  description: string;
  endTime: Date;
  endDate: Date;
  notify: boolean;
}

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent {
  @Input() title: string = ""
  @Input() description: string = ""
  @Input() endDate: string = new Date().toLocaleDateString().split("/").join("-")
  @Input() endTime: string = "00:00"
  @Input() notify: boolean = false
  @Output() closeOverlay: EventEmitter<void> = new EventEmitter<void>()
  @Output() onAddTask: EventEmitter<EmitParams> = new EventEmitter<EmitParams>()

  public close() {
    // emit close event
    this.closeOverlay.emit()
  }

  public handleTitleInput(event: Event) {
    const target = event.target as HTMLInputElement
    this.title = target.value
  }

  public handleDescriptionInput(event: Event) {
    const target = event.target as HTMLTextAreaElement
    this.description = target.value
  }

  public handleEndDateChange(event: Event) {
    const target = event.target as HTMLInputElement
    console.log(target.value)
    this.endTime = target.value
  }

  public handleNotifyChange(event: Event) {
    const target = event.target as HTMLInputElement
    this.notify = target.checked
  }

  public handleEndTimeChange(event: Event) {
    const target = event.target as HTMLInputElement
    this.endTime = target.value
  }

  public handleAddButton(event: Event) {

    this.onAddTask.emit({
      title: this.title,
      description: this.description,
      endTime: new Date(this.endTime),
      endDate: new Date(this.endDate.split("-").join("/")),
      notify: this.notify,
    })

    // close after adding
    this.close()
  }
}
