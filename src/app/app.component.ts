import { Component } from '@angular/core';
import {timer} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showProgress = false 

  openProgress() {
    this.showProgress = true

    timer(3000).subscribe(_ => this.showProgress = false)
  }
}
