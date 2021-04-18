import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentfather-son';
  ClickCounter;

  countChangedHandler(count: number) {
    this.ClickCounter = count;
    console.log('cha' + count);
  }
}
