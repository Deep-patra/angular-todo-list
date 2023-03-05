import { Injectable } from '@angular/core';
import { type ITask } from 'src/types/task';

interface IAddTaskParams {
  title: string;
  description: string;
  endDate: Date;
  endTime: Date;
  notify: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  tasks: ITask[]

  constructor() {
    this.tasks = this.getTaskFromStorage()
  }

  public addTask({ title, description, endDate, endTime, notify }: IAddTaskParams) {
    const task: ITask = {
      id: window.crypto.randomUUID(),
      title: title === "" ? "No Title" : title,
      description: description === "" ? "No description" : description,
      endDate,
      endTime,
      createdAt: new Date(),
      notify,
    }

    this.tasks.push(task)

    // store the task
    this.setTaskIntoStorage(this.tasks)
  }

  public removeTask(id: string) {
    // remove the task
    this.tasks = this.tasks.filter((value: ITask) => {
      if (value.id === id) return
      return value
    })

    // update the tasks stored in localstorage
    this.setTaskIntoStorage(this.tasks)
  }

  private getTaskFromStorage(): ITask[] {
    if (typeof localStorage !== "undefined") {
      const _tasks = localStorage.getItem("TASKS")

      if (_tasks) {
        const values = JSON.parse(_tasks)
        return values as ITask[]
      } else {
        return []
      }
    } else return []
  }

  private setTaskIntoStorage(tasks: ITask[]) {
    const value = JSON.stringify(tasks)
    localStorage.setItem("TASKS", value)
  }
}
