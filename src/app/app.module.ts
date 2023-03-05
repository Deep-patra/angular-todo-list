import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterailModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NewCompComponent } from './new-comp/new-comp.component';
import { TaskHeaderComponent } from '../components/task-header/task-header.component'
import { AddItemComponent } from 'src/components/add-item/add-item.component';
import { AddTaskFormComponent } from 'src/components/add-task-form/add-task-form.component'
import { TaskItemComponent } from 'src/components/task-item/task-item.component';
import { TaskListComponent } from 'src/components/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    TaskHeaderComponent,
    AddItemComponent,
    AddTaskFormComponent,
    TaskItemComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterailModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
