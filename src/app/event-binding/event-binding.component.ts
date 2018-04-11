import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public name = 'Narisorn';
  public greeting = '';

  constructor() { }

  ngOnInit() {
  }
  onClick(event) {
    console.log(event);
    this.greeting = 'Welcome to my world';
  }
  logMessage(value) {
    console.log(value);
  }

}
