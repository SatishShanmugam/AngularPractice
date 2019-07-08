import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{EmployeeService} from '../registration/employee.service';
import { IEmployee } from 'src/app/registration/IEmployee';
import{EmployeedataService} from '../employeedata.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //  empService:EmployeeService;
  // employees:IEmployee = null;
   First_Name : string ="";
   EMP_ID: string = "";
   Mobile_Number:string ="";
   Gender:string ="";
   EmployeeService: any;
   EmployeedataService: any;
   constructor(public router:Router,private empservice:EmployeeService,private emp:EmployeedataService) { }
   //output:JSON;
  //obj:any ={firstName :this.First_Name,empid:this.EMP_ID,mobile:this.Mobile_Number,gender:this.Gender};
  employees:IEmployee = {firstName :this.First_Name,empid:this.EMP_ID,phoneNumber:this.Mobile_Number,gender:this.Gender};
  ngOnInit() {
  }
 
  onClickRegister()
  {
    this.router.navigate(['/viewDetail']);
  }
  onClickSave()
  {
   //this.empService.createEmployee(this.First_Name,this.EMP_ID,this.Mobile_Number,this.Gender).then();

  this.empservice.addEmployee(this.employees)
    .subscribe(employ => {
      this.EmployeedataService.push(employ);
    });
  }
}
