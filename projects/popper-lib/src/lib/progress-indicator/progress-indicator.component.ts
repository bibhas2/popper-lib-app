import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'popper-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css']
})
export class ProgressIndicatorComponent implements OnInit {
  @Input() image:string
  
  @HostBinding("style.background-image") get backgroundImage() : string {
    return `url("${this.image}")`
  }

  constructor() { }

  ngOnInit() {
  }

}
