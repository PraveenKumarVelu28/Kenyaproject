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


import { StaffmasterComponent } from '../app/staff/staffmaster/staffmaster.component';
import { StaffdashboardComponent } from '../app/staff/staffdashboard/staffdashboard.component';
import { ApplicationmasterComponent } from '../app/Application/applicationmaster/applicationmaster.component';
import { ApplicationdashboardComponent } from '../app/Application/applicationdashboard/applicationdashboard.component';
import { LoginComponent } from './Pages/Login/login/login.component';
import { SidebarComponent } from './Pages/Login/sidebar/sidebar.component';
import { DignosticregComponent } from './Pages/Dignostic/dignosticreg/dignosticreg.component';
import { DignosticdashboardComponent } from './Pages/Dignostic/dignosticdashboard/dignosticdashboard.component';
import { HeaderComponent } from './Pages/Login/header/header.component';
import { CountryMasterComponent } from './Pages/Masters/country-master/country-master.component';
import { CountryMasterDashComponent } from './Pages/Masters/country-master-dash/country-master-dash.component';
import { CityMasterComponent } from './Pages/Masters/city-master/city-master.component';
import { CityMasterDashComponent } from './Pages/Masters/city-master-dash/city-master-dash.component';
import { ProvinceMasterComponent } from './Pages/Masters/province-master/province-master.component';
import { ProvinceMasterDashComponent } from './Pages/Masters/province-master-dash/province-master-dash.component';

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
    CityMasterDashComponent
  ],
  imports: [
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
