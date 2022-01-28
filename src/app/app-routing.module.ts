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
import { EditDiagnosticRegistrationComponent } from './Pages/Dignostic/edit-diagnostic-registration/edit-diagnostic-registration.component';
import { OrdersComponent } from './Pages/DiagnosticCentre/orders/orders.component';
import { AppointmentsDashboardComponent } from './Pages/DiagnosticCentre/appointments-dashboard/appointments-dashboard.component';
import { PatientDashboardComponent } from './Pages/DiagnosticCentre/patient-dashboard/patient-dashboard.component';
import { StaffdashboardComponent } from './Pages/staff/staffdashboard/staffdashboard.component';
import { StaffmasterComponent } from './Pages/staff/staffmaster/staffmaster.component';
import { DiagnosticcenterslotsComponent } from './Pages/Dignostic/diagnosticcenterslots/diagnosticcenterslots.component';
import { DiagnosticSlotsDashComponent } from './Pages/Dignostic/diagnostic-slots-dash/diagnostic-slots-dash.component';
import { DiagnosticPackageDashComponent } from './Pages/Dignosticpackaeandtestmaster/diagnostic-package-dash/diagnostic-package-dash.component';
import { DiagnosticpackageComponent } from './Pages/Dignosticpackaeandtestmaster/diagnosticpackage/diagnosticpackage.component';
import { DiagnosticTestDashComponent } from './Pages/Dignosticpackaeandtestmaster/diagnostic-test-dash/diagnostic-test-dash.component';
import { DiagnostictestComponent } from './Pages/Dignosticpackaeandtestmaster/diagnostictest/diagnostictest.component';
import { EditDiagnosticTestComponent } from './Pages/Dignosticpackaeandtestmaster/edit-diagnostic-test/edit-diagnostic-test.component';
import { DignosticprofileComponent } from './Pages/DiagnosticCentre/dignosticprofile/dignosticprofile.component';
import { AssignedappoitmentsComponent } from './Pages/DiagnosticCentre/assignedappoitments/assignedappoitments.component';
import { VisitedappoitmentsComponent } from './Pages/DiagnosticCentre/visitedappoitments/visitedappoitments.component';
import { CancelledappoitmentsComponent } from './Pages/DiagnosticCentre/cancelledappoitments/cancelledappoitments.component';
import { RevenueComponent } from './Pages/DiagnosticCentre/revenue/revenue.component';
import { TestOffersComponent } from './Pages/Dignosticpackaeandtestmaster/test-offers/test-offers.component';
import { TestoffersdashbaordComponent } from './Pages/Dignosticpackaeandtestmaster/testoffersdashbaord/testoffersdashbaord.component';
import { DigDashboardComponent } from './Pages/DiagnosticCentre/dig-dashboard/dig-dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Dignosticreg', component: DignosticregComponent },
  { path: 'Dignosticdashboard', component: DignosticdashboardComponent },
  { path: 'Header', component: HeaderComponent },
  { path: 'CityMasterDash', component: CityMasterDashComponent },
  { path: 'CountryMasterDash', component: CountryMasterDashComponent },
  { path: 'CountryMaster', component: CountryMasterComponent },
  { path: 'CountryMaster/:id', component: CountryMasterComponent },
  { path: 'ProvinceMasterDash', component: ProvinceMasterDashComponent },
  { path: 'ProvinceMaster', component: ProvinceMasterComponent },
  { path: 'CityMaster', component: CityMasterComponent },
  { path: 'EditDiagnosticRegistration/:id', component: EditDiagnosticRegistrationComponent },
  { path: 'Orders', component: OrdersComponent },
  { path: 'AppointmentsDashboard', component: AppointmentsDashboardComponent },
  { path: 'PatientDashboard', component: PatientDashboardComponent },
  { path: 'Staffdashboard', component: StaffdashboardComponent },
  { path: 'Staffmaster', component: StaffmasterComponent },
  { path: 'Staffmaster/:id', component: StaffmasterComponent },
  { path: 'Diagnosticcenterslots', component: DiagnosticcenterslotsComponent },
  { path: 'DiagnosticSlotsDash', component: DiagnosticSlotsDashComponent },
  { path: 'DiagnosticPackageDash', component: DiagnosticPackageDashComponent },
  { path: 'Diagnosticpackage', component: DiagnosticpackageComponent },

  { path: 'DiagnosticTestDash', component: DiagnosticTestDashComponent },
  { path: 'Diagnostictest', component: DiagnostictestComponent },
  { path: 'EditDiagnosticTest/:id', component: EditDiagnosticTestComponent },
  { path: 'Dignosticprofile', component: DignosticprofileComponent },
  { path: 'Assignedappoitments', component: AssignedappoitmentsComponent },
  { path: 'Visitedappoitments', component: VisitedappoitmentsComponent },
  { path: 'Cancelledappoitments', component: CancelledappoitmentsComponent },
  { path: 'Revenue', component: RevenueComponent },
  { path: 'TestOffers', component: TestOffersComponent },
  { path: 'Testoffersdashbaord', component: TestoffersdashbaordComponent },

  { path: 'DigDashboard', component: DigDashboardComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
