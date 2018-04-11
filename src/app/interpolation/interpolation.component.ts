import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html'
})
export class InterpolationComponent implements OnInit {
  public name = 'Narisorn Samukkarn';
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }
  greetUser() {
    return 'Hello ' + this.name;
  }

}
