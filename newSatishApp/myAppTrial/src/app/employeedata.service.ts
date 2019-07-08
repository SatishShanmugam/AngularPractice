import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService implements InMemoryDbService{

  constructor() { }
  createDb()
  {
    let employeeDataDetail =[
      {firstName:"satish",empid:"3689",mobile:"5163016431",gender:"male"},
      {firstName:"satishsdf",empid:"3699",mobile:"51631212016431",gender:"male"}
    ]
    return {employeeDataDetail}
  }
}
