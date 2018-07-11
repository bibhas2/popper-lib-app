import { Component, OnInit, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'popper-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @HostBinding("style.display") display = "none"
  @Input() width = "60%" 
  
  constructor() { }

  ngOnInit() {
  }

  open() {
    this.display = "block"
  }

  close() {
    this.display = "none"
  }

  @HostListener("document:keydown.esc")
  onEsc() {
    this.close()
  }
  
  @HostListener("click")
  onHostClick() {
    this.close()
  }

  discardClick(event:MouseEvent) {
    event.stopPropagation()
  }

}
