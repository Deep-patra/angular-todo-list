import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.css']
})
export class TaskHeaderComponent implements OnInit {
  @Input() theme: "DARK" | "LIGHT" = "LIGHT"

  ngOnInit() {
    if (typeof localStorage !== "undefined") {
      const theme = localStorage.getItem('THEME')

      if (theme) {
        theme !== "LIGHT" ? this.theme = "LIGHT" : this.theme = "DARK"
        this.setClass()
      }
    }
  }

  private setClass() {
    const html = document.querySelector(":root") as HTMLElement
    this.theme === "DARK" ? html.classList.add("dark") : html.classList.remove("dark")
  }

  private storeTheme() {
    localStorage.setItem("THEME", this.theme)
  }

  toggleTheme() {
    if (this.theme === "DARK") this.theme = "LIGHT"
    else  this.theme = "DARK"

    // set the theme on the root
    this.setClass()

    // store the theme in local storage
    this.storeTheme()
  }
}
