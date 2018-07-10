import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'popper-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @HostBinding("style.display") visibility = "none"
  constructor() { }

  ngOnInit() {
  }

  open() {
    this.visibility = "visible"
  }
  
  close() {
    this.visibility = "none"
  }

}
