import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { StaffComponent } from './staff/staff.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { ManstaffComponent } from './manstaff/manstaff.component';
import { SalaryComponent } from './salary/salary.component';
import { AttendanceComponent } from './attendance/attendance.component';


const routes: Routes = [
  {
    path:"dash",
    component:DashComponent
     },
     {
       path:"staff",
       component:StaffComponent
     },
     {
       path:"addstaff",
       component:AddstaffComponent
     },
     {
       path:"manstaff",
       component:ManstaffComponent
     },
     {
       path:"salary",
       component:SalaryComponent
     },
     {
       path:"attendance",
       component:AttendanceComponent
     },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
