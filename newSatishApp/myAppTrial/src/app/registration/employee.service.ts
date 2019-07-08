import {Injectable} from '@angular/core';
import {IEmployee} from '../registration/IEmployee';
import {Http,Response} from '@angular/http';
import {Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { EmployeedataService } from '../employeedata.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({ providedIn: 'root'})
export class EmployeeService{
    private employeeURL = 'app/employeeDataDetail';
  log: any;
    constructor(private http: HttpClient)
    {

    }
 
    getEmployee():Observable<IEmployee[]>{
      return this.http.get<IEmployee[]>(this.employeeURL)
      //.pipe(map((res) => res));

    }

     addEmployee (employe: IEmployee): Observable<IEmployee> {
      return this.http.post<IEmployee>(this.employeeURL, employe, httpOptions).pipe(
        tap((newEmploye: IEmployee) => this.log(`added employee w/ id=${newEmploye.firstName}`)),
       
      );
    }
  }

