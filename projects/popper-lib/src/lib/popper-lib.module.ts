import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MenuComponent, ModalComponent],
  exports: [MenuComponent, ModalComponent]
})
export class PopperLibModule { }
