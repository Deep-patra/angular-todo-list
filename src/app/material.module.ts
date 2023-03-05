import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'

const materailModules = [
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materailModules
  ],
  exports: [
    ...materailModules
  ],
})
export class MaterailModule {}
