import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Swal1 from 'sweetalert2';
import { MediTestService } from '../../../medi-test.service';


@Component({
  selector: 'app-dignosticprofile',
  templateUrl: './dignosticprofile.component.html',
  styleUrls: ['./dignosticprofile.component.css']
})
export class DignosticprofileComponent implements OnInit {

  constructor(public MediTestService: MediTestService, private activatedroute: ActivatedRoute) { }
  diagnosticCenterName: any;
  phoneNo: any;
  ContactPerson: any;
  contactPerson: any;
  username: any;
  licenseNo: any;
  EmailID: any;
  address: any;
  ContactPersonPhNo: any;
  ngOnInit(): void {

    this.MediTestService.GetDiagnosticForAdminByLanguageID(1).subscribe(
      data => {
        let temp: any = data.filter(x => x.id == localStorage.getItem('DiagnosticId'));
        this.diagnosticCenterName = temp[0].diagnosticCenterName;
        this.phoneNo = temp[0].phoneNo;
        this.username = temp[0].username;
        this.contactPerson = temp[0].contactPerson;
        this.Password = temp[0].password;
        this.licenseNo = temp[0].licenseNo;
        this.address = temp[0].address;
        this.EmailID = temp[0].emailID;
        this.zipcode = temp[0].zipcode;
        this.ContactPersonPhNo = temp[0].contactPersonPhNo;
      }, error => {
      }
    )


  }
  zipcode: any;
  Password: any
  public Update() {
    debugger

    var entity = {
      'LanguageID': 1,
      'DiagnosticCenterID': localStorage.getItem('DiagnosticId'),
      'PhoneNo': this.phoneNo,
      'ContactPerson': this.ContactPerson,
      'ContactPersonPhNo': this.ContactPersonPhNo,
      'LicenseNo': this.licenseNo,
      'LicenseValidTill': new Date,
      'EmailID': this.EmailID,
      'Address': this.address,
      'CityID': 1,
      'Zipcode': this.zipcode,
      'Website': '',
      'Timings': '',
      'Description': '',
      'AreaID': 1,
      'Pincode': this.zipcode,
      'CountryID': 1,
      'DiagnosticAppointmentPerSlot': 1,
      'HomeSampleOrdersPerSlot': 1,
      'HomeSample': 1,
      'EveningTimings': '',
      'Username1': this.username, 
      'Password': this.Password
    }
    this.MediTestService.UpdateDiagnosticCenterProfile(entity).subscribe(res => {
      let test = res;
      Swal1.fire('Profile Updated Successfully');

    })


    // var entity = {
    //   'ID': Number(sessionStorage.getItem('userid')),
    //   'Name': this.Name,
    //   'Surname': this.Surname,
    //   'EmailAddress': this.EmailID,
    //   'PhoneNo': this.PhoneNumber,
    //   'Password': this.Password

    // }
    // this.MediTestService.UpdateUserProfile(entity).subscribe(
    //   data => {
    //     debugger
    //     Swal.fire('Profile Updated Successfully');


    //   }, error => {
    //   }
    // )
  }

}

