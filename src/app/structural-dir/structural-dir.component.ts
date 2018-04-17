import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent implements OnInit {
  displayName = true; //ตัวแปร control true,false ใน ngIf ที่ DOM ของ HTML
  public color = 'red1';
  public colors = ['red', 'blue', 'green', 'yellow']
  constructor() { }

  ngOnInit() {
  }

}
