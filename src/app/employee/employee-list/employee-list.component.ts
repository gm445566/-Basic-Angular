import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  public employees = [
    { 'id': 1, 'name': 'Narisorn S.', 'age': 30 },
    { 'id': 2, 'name': 'Somch S.', 'age': 31 },
    { 'id': 3, 'name': 'York S.', 'age': 32 },
    { 'id': 4, 'name': 'Nomo S.', 'age': 33 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
