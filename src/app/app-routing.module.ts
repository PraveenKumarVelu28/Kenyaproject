import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffmasterComponent } from '../app/staff/staffmaster/staffmaster.component';
import { StaffdashboardComponent } from '../app/staff/staffdashboard/staffdashboard.component';
import { ApplicationmasterComponent } from '../app/Application/applicationmaster/applicationmaster.component';
import { ApplicationdashboardComponent } from '../app/Application/applicationdashboard/applicationdashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/Staffmaster', pathMatch: 'full' },
  { path: 'Staffmaster', component: StaffmasterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
