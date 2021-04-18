import { Component, OnInit, Output , EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
   count = 5;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
