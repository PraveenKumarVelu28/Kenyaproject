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
    ApplicationdashboardComponent
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
