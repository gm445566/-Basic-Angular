import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  public hasError = true;
  public isSpecial = true;
  public hightlightColor = 'orange';

  public titeStyles = {
    color: 'blue',
    fontStyle: 'italic'
  };
  constructor() { }

  ngOnInit() {
  }

}
