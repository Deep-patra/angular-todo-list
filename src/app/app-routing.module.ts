import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewCompComponent } from './new-comp/new-comp.component';

const routes: Routes = [
  { path: 'hello', component: NewCompComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
