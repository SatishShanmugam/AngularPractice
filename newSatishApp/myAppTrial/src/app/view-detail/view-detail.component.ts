import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../registration/employee.service';
import { IEmployee } from 'src/app/registration/IEmployee';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css'],
  providers: [EmployeeService]
})
export class ViewDetailComponent implements OnInit {
  employees:IEmployee[]= null;

  constructor(private empService:EmployeeService) { 
    //this.employees=this.empService.getEmployee();
  }

  ngOnInit() {
    this.empService.getEmployee().subscribe((empData)=>this.employees = empData);
    
  }

}
