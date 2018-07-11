import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, ModalComponent, ProgressIndicatorComponent],
  exports: [MenuComponent, ModalComponent, ProgressIndicatorComponent]
})
export class PopperLibModule { }
