import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
  ],
  declarations: [MenuComponent, ModalComponent],
  exports: [MenuComponent]
})
export class PopperLibModule { }
