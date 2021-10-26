import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/Login/login/login.component';
import { DignosticregComponent } from './Pages/Dignostic/dignosticreg/dignosticreg.component';
import { DignosticdashboardComponent } from './Pages/Dignostic/dignosticdashboard/dignosticdashboard.component';
import { HeaderComponent } from './Pages/Login/header/header.component';
import { CityMasterDashComponent } from './Pages/Masters/city-master-dash/city-master-dash.component';
import { CountryMasterDashComponent } from './Pages/Masters/country-master-dash/country-master-dash.component';
import { CountryMasterComponent } from './Pages/Masters/country-master/country-master.component';
import { ProvinceMasterDashComponent } from './Pages/Masters/province-master-dash/province-master-dash.component';
import { ProvinceMasterComponent } from './Pages/Masters/province-master/province-master.component';
import { CityMasterComponent } from './Pages/Masters/city-master/city-master.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Dignosticreg', component: DignosticregComponent },
  { path: 'Dignosticdashboard', component: DignosticdashboardComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'CityMasterDash', component: CityMasterDashComponent },
  { path: 'CountryMasterDash', component: CountryMasterDashComponent },
  { path: 'CountryMaster', component: CountryMasterComponent },
  { path: 'ProvinceMasterDash', component: ProvinceMasterDashComponent },
  { path: 'ProvinceMaster', component: ProvinceMasterComponent },
  { path: 'CityMaster', component: CityMasterComponent },
  


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
