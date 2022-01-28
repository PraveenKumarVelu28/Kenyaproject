import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';;
import { NgxPaginationModule } from 'ngx-pagination';

import { StaffmasterComponent } from '../app/Pages/staff/staffmaster/staffmaster.component';
import { StaffdashboardComponent } from '../app/Pages/staff/staffdashboard/staffdashboard.component';
import { ApplicationmasterComponent } from '../app/Application/applicationmaster/applicationmaster.component';
import { ApplicationdashboardComponent } from '../app/Application/applicationdashboard/applicationdashboard.component';
import { LoginComponent } from './Pages/Login/login/login.component';
import { SidebarComponent } from './Pages/Login/sidebar/sidebar.component';
import { DignosticregComponent } from './Pages/Dignostic/dignosticreg/dignosticreg.component';
import { DignosticdashboardComponent } from './Pages/Dignostic/dignosticdashboard/dignosticdashboard.component';
import { HeaderComponent } from './Pages/Login/header/header.component';
import { ArchwizardModule } from 'angular-archwizard';

import { CountryMasterComponent } from './Pages/Masters/country-master/country-master.component';
import { CountryMasterDashComponent } from './Pages/Masters/country-master-dash/country-master-dash.component';
import { CityMasterComponent } from './Pages/Masters/city-master/city-master.component';
import { CityMasterDashComponent } from './Pages/Masters/city-master-dash/city-master-dash.component';
import { ProvinceMasterComponent } from './Pages/Masters/province-master/province-master.component';
import { ProvinceMasterDashComponent } from './Pages/Masters/province-master-dash/province-master-dash.component';
import { EditDiagnosticRegistrationComponent } from './Pages/Dignostic/edit-diagnostic-registration/edit-diagnostic-registration.component';
import { OrdersComponent } from './Pages/DiagnosticCentre/orders/orders.component';
import { AppointmentsDashboardComponent } from './Pages/DiagnosticCentre/appointments-dashboard/appointments-dashboard.component';
import { PatientDashboardComponent } from './Pages/DiagnosticCentre/patient-dashboard/patient-dashboard.component';
import { DiagnosticcenterslotsComponent } from './Pages/Dignostic/diagnosticcenterslots/diagnosticcenterslots.component';
import { DiagnosticSlotsDashComponent } from './Pages/Dignostic/diagnostic-slots-dash/diagnostic-slots-dash.component';
import { DiagnosticpackageComponent } from './Pages/Dignosticpackaeandtestmaster/diagnosticpackage/diagnosticpackage.component';
import { DiagnosticPackageDashComponent } from './Pages/Dignosticpackaeandtestmaster/diagnostic-package-dash/diagnostic-package-dash.component';
import { DiagnostictestComponent } from './Pages/Dignosticpackaeandtestmaster/diagnostictest/diagnostictest.component';
import { DiagnosticTestDashComponent } from './Pages/Dignosticpackaeandtestmaster/diagnostic-test-dash/diagnostic-test-dash.component';
import { EditDiagnosticTestComponent } from './Pages/Dignosticpackaeandtestmaster/edit-diagnostic-test/edit-diagnostic-test.component';
import { DignosticprofileComponent } from './Pages/DiagnosticCentre/dignosticprofile/dignosticprofile.component';
import { AssignedappoitmentsComponent } from './Pages/DiagnosticCentre/assignedappoitments/assignedappoitments.component';
import { VisitedappoitmentsComponent } from './Pages/DiagnosticCentre/visitedappoitments/visitedappoitments.component';
import { CancelledappoitmentsComponent } from './Pages/DiagnosticCentre/cancelledappoitments/cancelledappoitments.component';
import { RevenueComponent } from './Pages/DiagnosticCentre/revenue/revenue.component';
import { TestOffersComponent } from './Pages/Dignosticpackaeandtestmaster/test-offers/test-offers.component';
import { TestoffersdashbaordComponent } from './Pages/Dignosticpackaeandtestmaster/testoffersdashbaord/testoffersdashbaord.component';
import { DigDashboardComponent } from './Pages/DiagnosticCentre/dig-dashboard/dig-dashboard.component';
import { SpinnerComponent } from './Pages/Login/spinner/spinner.component';



const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
};

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:

  url: 'https://httpbin.org/post',

  maxFilesize: 5000000,

  timeout: 600000,
  //acceptedFiles: 'image/*'
};

@NgModule({
  declarations: [
    AppComponent,
    StaffmasterComponent,
    StaffdashboardComponent,
    ApplicationmasterComponent,
    ApplicationdashboardComponent,
    LoginComponent,
    SidebarComponent,
    DignosticregComponent,
    DignosticdashboardComponent,
    HeaderComponent,
    CountryMasterComponent,
    CountryMasterDashComponent,
    ProvinceMasterComponent,
    ProvinceMasterDashComponent,
    CityMasterComponent,
    CityMasterDashComponent,
    EditDiagnosticRegistrationComponent,
    OrdersComponent,
    AppointmentsDashboardComponent,
    PatientDashboardComponent,
    
    DiagnosticcenterslotsComponent,
    DiagnosticSlotsDashComponent,
    DiagnosticpackageComponent,
    DiagnosticPackageDashComponent,
    DiagnostictestComponent,
    DiagnosticTestDashComponent,
    EditDiagnosticTestComponent,
    DignosticprofileComponent,
    AssignedappoitmentsComponent,
    VisitedappoitmentsComponent,
    CancelledappoitmentsComponent,
    RevenueComponent,
    TestOffersComponent,
    TestoffersdashbaordComponent,
    DigDashboardComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropzoneModule,
    FormsModule,
    NgxDropzoneModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    ArchwizardModule,
    NgMultiSelectDropDownModule.forRoot(),
    [BrowserModule, NgxPaginationModule],
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropzoneModule,
    NgxDropzoneModule,
    Ng2SearchPipeModule,
    NgWizardModule.forRoot(ngWizardConfig),
    NgxSpinnerModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
