import { Component, OnInit, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'popper-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @HostBinding("style.top") y = "0px"
  @HostBinding("style.left") x = "0px"
  @HostBinding("style.visibility") visibility = "hidden"
  @Input() @HostBinding("style.width") width = "200px"
 
  constructor() { }
 
  ngOnInit() {
  }
 
  open(e:MouseEvent) {
    this.x = `${e.x}px`
    this.y = `${e.y}px`
 
    this.visibility = "visible"
 
    e.stopPropagation()
  }
 
  close() {
    this.visibility = "hidden"
  }
 
  @HostListener('document:click')
  public onDocumentClick() {
    if (this.visibility === "visible") {
      this.close()
    }
  }
}
