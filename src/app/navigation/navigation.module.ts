import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { ManstaffComponent } from './manstaff/manstaff.component';
import { StaffComponent } from './staff/staff.component';
import { SalaryComponent } from './salary/salary.component';
import { DashComponent } from './dash/dash.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { DepartmentComponent } from './department/department.component';


@NgModule({
  declarations: [
    AddstaffComponent,
    ManstaffComponent,
    StaffComponent,
    SalaryComponent,
    DashComponent,
    AttendanceComponent,
    DepartmentComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class NavigationModule { }
