import { Component, OnInit, HostBinding, Input } from '@angular/core';

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
    console.log("Opening modal")
    this.display = "block"
  }

  close() {
    console.log("Closing modal")
    this.display = "none"
  }

}
