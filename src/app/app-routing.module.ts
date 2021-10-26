import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffmasterComponent } from '../app/staff/staffmaster/staffmaster.component';
import { StaffdashboardComponent } from '../app/staff/staffdashboard/staffdashboard.component';
import { ApplicationmasterComponent } from '../app/Application/applicationmaster/applicationmaster.component';
import { ApplicationdashboardComponent } from '../app/Application/applicationdashboard/applicationdashboard.component';
import { LoginComponent } from './Pages/Login/login/login.component';
import { DignosticregComponent } from './Pages/Dignostic/dignosticreg/dignosticreg.component';
import { DignosticdashboardComponent } from './Pages/Dignostic/dignosticdashboard/dignosticdashboard.component';
import { HeaderComponent } from './Pages/Login/header/header.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Dignosticreg', component: DignosticregComponent },
  { path: 'Dignosticdashboard', component: DignosticdashboardComponent },
  { path: 'Header', component: HeaderComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
