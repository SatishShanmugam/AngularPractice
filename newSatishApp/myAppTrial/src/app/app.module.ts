import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {Http,Response} from '@angular/http';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import{EmployeedataService} from './employeedata.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ViewDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(EmployeedataService, { dataEncapsulation: false }),
    RouterModule.forRoot([
      {path:'registration',component:RegistrationComponent},
      {path:'viewDetail',component:ViewDetailComponent},
      {path:'',component:LoginComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
