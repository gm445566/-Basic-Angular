import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployee() {
    return [
      { 'id': 1, 'name': 'Narisorn S.', 'age': 30 },
      { 'id': 2, 'name': 'Somch S.', 'age': 31 },
      { 'id': 3, 'name': 'York S.', 'age': 32 },
      { 'id': 4, 'name': 'Nomo S.', 'age': 33 },
    ];
  }

}
