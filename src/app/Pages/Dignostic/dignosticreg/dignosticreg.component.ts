import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-dignosticreg',
  templateUrl: './dignosticreg.component.html',
  styleUrls: ['./dignosticreg.component.css']
})
export class DignosticregComponent implements OnInit {

  constructor(public docservice: MediTestService, private spinner: NgxSpinnerService) { }

  public citylist: any;
  public cityid: any;
  public diagnosticcentername: any;
  public diagnosticphno: any;
  public contactpersonname: any;
  public contactpersonphno: any;
  public licenseno: any;
  public licensevalidtill: any;
  public email: any;
  public address: any;
  public zipcode: any;
  public website: any;
  public timings: any;
  public samplepickup: any;
  public prefered: any;
  public description: any;
  public awards: any;
  public insurancelist: any;
  public insuranceid: any = [];
  public insurancedd = {};
  public diagnosticid: any;
  public attachments: any = [];
  public attachmentsurl: any = [];
  public validEmail: any;
  public showphoto: any = [];

  public arealist: any;
  public areaid: any;
  public pincode: any;
  public countrylist: any;
  public countrydd = {}
  public countryid: any;
  public citydd = {}
  public areadd = {};
  public tone: any;
  public ttwo: any;
  public fromampm: any;
  public toampm: any;
  public languageid: any;
  public labels: any;
  public monthlysubription: any;
  public hospitalclinicid: any;
  public hspwebsite: any;
  public hospitalfulltimebit: any;
  dropzonelable: any;
  public contractstartdate: any;
  public contractenddate: any;
  public search: any;
  awOptionalStep: any
  ngOnInit() {



    this.languageid = localStorage.getItem('LanguageID');

    this.getlanguage()
    this.GetCountryMaster();
    this.getinsurancemaster();

    if (this.languageid == 1) {
      this.dropzonelable = "Upload file"
    }
    else if (this.languageid == 6) {
      this.dropzonelable = "Télécharger des fichiers"
    }
  }
  onChange(newValue: any) { const validEmailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; if (validEmailRegEx.test(newValue)) { this.validEmail = true; } else { this.validEmail = false; } }


  public getlanguage() {
    debugger
    this.docservice.GetAdmin_DiagnosticRegistration_LabelBYLanguageID(this.languageid).subscribe(
      data => {

        this.labels = data;
        this.SelectLabel = this.labels[0].select;
        this.search = this.labels[0].search
      }, error => {
      }
    )
  }
  SelectLabel: any

  public getinsurancemaster() {

    this.docservice.GetInsuranceMasterByLanguageID(this.languageid).subscribe(
      data => {

        this.insurancelist = data;

        this.insurancedd = {
          singleSelection: true,
          idField: 'id',
          textField: 'short',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          //  itemsShowLimit: 3,
          allowSearchFilter: true,
          searchPlaceholderText: this.search,
        };

      }, error => {
      }
    )
  }


  public GetCountryMaster() {
    debugger
    this.docservice.GetCountryMasterByLanguageID(this.languageid).subscribe(
      data => {

        this.countrylist = data;
        this.countrydd = {
          singleSelection: true,
          idField: 'id',
          textField: 'short',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          //  itemsShowLimit: 3,
          allowSearchFilter: true,
          searchPlaceholderText: this.search,
        };
      }, error => {
      }
    )
  }

  public GetCountryID(item: any) {

    this.countryid = item.target.value;

    this.docservice.GetCityMasterBYIDandLanguageID(this.countryid, this.languageid).subscribe(
      data => {

        this.citylist = data;

        this.citydd = {
          singleSelection: true,
          idField: 'id',
          textField: 'short',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          //  itemsShowLimit: 3,
          allowSearchFilter: true,
          searchPlaceholderText: this.search,
        };
      }, error => {
      }
    )
  }


  public diagnosticappointmentperslot: any;
  public homesampleordersperslot: any;


  public GetCityID(item1: any) {

    this.cityid = item1.target.value;
    this.getareamasterbyid();
  }
  onItemDeSelect3(item1: any) {

    this.cityid = this.cityid.slice(item1.id)
    this.getareamasterbyid()
  }

  role: any
  public GetInuranceID(item: any) {
    debugger
    this.insuranceid.push(item.target.value);

  }


  public getfromampm(even: any) {
    this.fromampm = even.target.value;
  }

  public gettoampm(even: any) {
    this.toampm = even.target.value;
  }
  evngtime1: any;
  evngtime2: any;
  evngtimings: any;
  Username: any;
  Password: any;
  public insertdetails() {

    // if (this.attachmentsurl.length == 0) {
    //  
    //   Swal.fire("Please Upload Photo")
    // }
    debugger
    if (this.countryid == undefined || this.countryid.length == 0) {

      Swal.fire("Please Select Country");
    }
    else if (this.cityid == undefined || this.cityid.length == 0) {
      Swal.fire("Please Select Province")
    }
    else if (this.areaid == undefined || this.areaid.length == 0) {
      Swal.fire("Please Select City");
    }
    else {

      this.spinner.show();
      this.timings = this.tone + ' ' + ' TO ' + this.ttwo + ' ';

      this.evngtimings = this.evngtime1 + ' ' + ' TO ' + this.evngtime2 + ' ';

      if (this.website == undefined) {

      }
      else {
        this.hspwebsite = 'http://' + '' + this.website
      }

      var entity = {
        'DiagnosticCenterName': this.diagnosticcentername,
        'Description': this.description,
        'Address': this.address,
        'PhoneNo': this.diagnosticphno,
        'EmailID': this.email,
        'Timings': this.timings,
        'LanguageID': '1',
        'Zipcode': this.zipcode,
        'ContactPerson': this.contactpersonname,
        'ContactPersonPhNo': this.contactpersonphno,
        'LicenseNo': this.licenseno,
        'LicenseValidTill': this.licensevalidtill,
        'HomeSample': this.samplepickup,
        'Preffered': this.prefered,
        'Website': this.hspwebsite,
        'Awards': this.awards,
        'CityID': this.cityid,
        'AreaID': this.areaid,
        'Pincode': this.pincode,
        'CountryID': this.countryid,
        'MonthlySubscription': this.monthlysubription,
        'HospitalClinicID': this.hospitalclinicid,
        'Hospitalfulltimebit': 0,
        'ContractStartDate': this.contractstartdate,
        'ContractEndDate': this.contractenddate,
        'DiagnosticAppointmentPerSlot': 1,
        'HomeSampleOrdersPerSlot': 1,
        'EveningTimings': this.evngtimings,
        'Username': this.Username,
        'Password': this.Password,
      }
      this.docservice.InsertDiagnosticCenterRegistration(entity).subscribe(data => {
        debugger
        if (data != 0 && data != 1) {
          this.diagnosticid = data;
          this.inserthspphotos();
          this.insertinsurance();
          this.insertDiagnosticRevenue()
          if (this.languageid == 1) {
            Swal.fire('Registration Completed', 'Details saved successfully', 'success');
            this.spinner.hide();
          }
          else {
            Swal.fire('Inscription terminée');
            this.spinner.hide();
          }
          this.clear();

          location.href = "#/Dignosticdashboard"

        }
        else {
          if (data == 0) {
            if (this.languageid == 1) {
              Swal.fire('Email address already exists. Please verify and use the correct email address.');
              this.spinner.hide();
            }
            else {
              Swal.fire("L'adresse email existe déjà. Veuillez vérifier et utiliser la bonne adresse email.");
              this.spinner.hide();
            }

          }
          else {
            if (this.languageid == 1) {
              Swal.fire('The phone number already exists. Please verify and use the correct number');
              this.spinner.hide();
            }
            else {
              Swal.fire("Le numéro de téléphone existe déjà.Veuillez vérifier et utiliser le bon numéro.");
              this.spinner.hide();
            }
          }

        }
      }, error => {
        Swal.fire("Exception While Saving.Please try After some time");
        this.spinner.hide();
      })

    }
  }


  public insertinsurance() {
    debugger
    for (let i = 0; i < this.insuranceid.length; i++) {
      var entity = {
        'DiagnosticCenterID': this.diagnosticid,
        'InsuranceID': this.insuranceid[i]
      }
      this.docservice.InsertDiagnosticCenterInsurances(entity).subscribe(data => {

        if (data != 0) {
        }
      })
    }
  }


  public insertDiagnosticRevenue() {
    debugger
    var entity = {
      'DiagnosticID': this.diagnosticid,
      'MonthlySubscription': this.monthlysubription,
      'ContractStartdate': this.contractstartdate,
      'ContractEnddate': this.contractstartdate
    }
    this.docservice.InsertDiagnosticCentersSubscriptions_Revenue(entity).subscribe(data => {

      if (data != 0) {
      }
    })

  }



  public inserthspphotos() {
    debugger
    if (this.attachmentsurl.length == 0) {
      this.attachmentsurl[0] = 'C:\\MarocAPI\\Images\\DiagnosticCenterPhotos\\Diagnostics.jpg'
    }

    for (let i = 0; i < this.attachmentsurl.length; i++) {
      var entity = {
        'DiagnosticCenterID': this.diagnosticid,
        'PhotoURL': this.attachmentsurl[i]
      }
      this.docservice.InsertInsertDiagnosticCenterPhotos(entity).subscribe(data => {

        if (data != 0) {
        }
      })
    }
  }

  public dummshowsignatureurl: any = []
  public onattachmentUpload(abcd: any) {
    this.dummshowsignatureurl = []
    // for (let i = 0; i < abcd.length; i++) {
    this.attachments.push(abcd.addedFiles[0]);
    this.uploadattachments();
    // }
    if (this.languageid == 1) {
      Swal.fire('Added Successfully');
      abcd.length = 0;
    }
    else {
      Swal.fire('Mis à jour avec succès');
      abcd.length = 0;
    }

  }

  public uploadattachments() {
    this.docservice.DiagnosticPhotos(this.attachments).subscribe(res => {

      this.attachmentsurl.push(res);
      this.dummshowsignatureurl.push(res);
      let a = this.dummshowsignatureurl[0].slice(2);

      let b = 'https://23.101.22.93' + a;

      this.showphoto.push(b)
      this.attachments.length = 0;

    })
    // this.sendattachment();
  }
  public clear() {
    this.diagnosticcentername = "";
    this.diagnosticphno = "";
    this.address = "";
    this.email = "";
    this.description = "";
    this.timings = "";
    this.zipcode = "";
    this.contactpersonname = "";
    this.contactpersonphno = "";
    this.licenseno = "";
    this.licensevalidtill = "";
    this.samplepickup = "";
    this.prefered = "";
    this.website = "";
    this.awards = "";
  }


  public getareamasterbyid() {

    this.docservice.GetAreaMasterByCityIDAndLanguageID(this.cityid, this.languageid).subscribe(
      data => {

        this.arealist = data;
        this.areadd = {
          singleSelection: true,
          idField: 'id',
          textField: 'areaName',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          //  itemsShowLimit: 3,
          allowSearchFilter: true,
          searchPlaceholderText: this.search,
        };
      }, error => {
      }
    )
  }
  public GetAreaID(item3: any) {

    this.areaid = item3.target.value;
    for (let i = 0; i < this.arealist.length; i++) {

      if (this.arealist[i].id == this.areaid) {

        this.pincode = this.arealist[i].pincode
      }
    }
  }

}

