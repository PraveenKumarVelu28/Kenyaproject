import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-diagnostictest',
  templateUrl: './diagnostictest.component.html',
  styleUrls: ['./diagnostictest.component.css']
})
export class DiagnostictestComponent implements OnInit {

  constructor(public docservice: MediTestService, private spinner: NgxSpinnerService,private activatedroute: ActivatedRoute) { }

  public diagnosticlist: any;
  public testlist: any;
  public diagnosticid: any;
  public description: any;
  public price: any;
  public testid: any;
  public tablecount: any;
  public count: any;

  public details: any;
  public diagnosticname: any;
  public diagnostictestname: any;
  public diagnotictestname: any;

  public qwerty: any = [];
  public idcount: any;
  public testname: any;
  public diadd = {};
  public labels: any;
  public languageid: any;
  dummdiagnosticid: any;
  public searchlable: any;
  id:any;
  diatestdd = {};

  ngOnInit() {

    this.activatedroute.params.subscribe(params => {

      this.id = params['id'];

    }
    )
    this.languageid = localStorage.getItem('LanguageID');
    this.diagnosticid = localStorage.getItem('diagnosticid')
    this.dummdiagnosticid = localStorage.getItem('diagnosticid')
    this.diagnosticname = localStorage.getItem('user')
    this.getlanguage();
    this.getdiagnosticforadmin();
    this.getdiagnostictestmaster();
    this.idcount = 1;
   
  }
  public getlanguage() {

    this.docservice.GetAdmin_MapServiceDiagnostic_Label(this.languageid).subscribe(
      data => {
        this.labels = data;
        this.SelectLabel = this.labels[0].select;
        this.searchlable = this.labels[0].search;
      }, error => {
      }
    )
  }
  SelectLabel: any;
  public getdiagnosticforadmin() {

    this.docservice.GetDiagnosticCenterListByLanguageID(this.languageid).subscribe(
      data => {

        this.diagnosticlist = data;
        this.diadd = {
          singleSelection: true,
          idField: 'id',
          textField: 'diagnosticCenterName',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          //  itemsShowLimit: 3,
          allowSearchFilter: true,
          searchPlaceholderText: this.searchlable,
        };
      }, error => {
      }
    )
  }



  public getdiagnostictestmaster() {

    this.docservice.GetDiagnosticTestMasterByLanguageID(this.languageid).subscribe(
      data => {

        this.testlist = data;

        this.diatestdd = {
          singleSelection: true,
          idField: 'id',
          textField: 'short',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          //  itemsShowLimit: 3,
          allowSearchFilter: true,
          searchPlaceholderText: this.searchlable,
        };

      }, error => {
      }
    )
  }

  public GetTestID(item4: any) {
    this.testid = item4.id;

    for (let i = 0; i < this.testlist.length; i++) {

      if (this.testlist[i].id == this.testid) {
        this.testname = this.testlist[i].short
      }
    }




    // this.docservice.GetDiagnosticCenterTests(this.testid).subscribe(
    //   data => {
    //    
    //     this.details = data[0];
    //    
    //     this.diagnotictestname = this.details.short

    //   }, error => {
    //   }
    // )

  }
  public GetDiagnosticID(item2: any) {

    this.diagnosticid = item2.id;
    this.docservice.GetDiagnosticCenterDetailsByID(this.diagnosticid).subscribe(
      data => {

        this.details = data[0];

        this.diagnosticname = this.details.diagnosticCenterName

      }, error => {
      }
    )
  }

  public adddetails() {
    this.tablecount = 1;

    var entity1 = {
      'Sno': this.idcount,
      'DiagnosticCenterID': this.diagnosticid,
      'DiagnosticName': this.diagnosticname,
      'DiagnosticTestID': this.testid,
      'DiagnotiocTestName': this.testname,
      'Description': this.description,
      'Price': this.price
    }
    this.idcount = this.idcount + 1;
    this.qwerty.push(entity1)
    this.description = "";
    this.price = "";
  }
  public insertdetails() {

    this.spinner.show();
    for (let i = 0; i < this.qwerty.length; i++) {
      var entity = {
        'DiagnosticCenterID': this.qwerty[i].DiagnosticCenterID,
        'DiagnosticTestID': this.qwerty[i].DiagnosticTestID,
        'Description': this.qwerty[i].Description,
        'Price': this.qwerty[i].Price,
      }
      this.docservice.InsertDiagnosticCenterTests(entity).subscribe(data => {

        if (data != 0) {
          if (this.languageid == 1) {
            Swal.fire('Completed', 'Details saved successfully', 'success');
            this.tablecount = 0;
            this.spinner.hide();
            location.href = "#/DiagnosticTestDash"
          }
          else if (this.languageid == 6) {
            Swal.fire('Terminé', 'Détails enregistrés avec succès !', 'success');
            this.tablecount = 0;
            this.spinner.hide();
            location.href = "#/DiagnosticTestDash"
          }

        }
        else {
          if (this.languageid == 1) {
            Swal.fire("Service Already Exists");
            this.spinner.hide();
            location.href = "#/DiagnosticTestDash"
          }
          else if (this.languageid == 6) {
            Swal.fire("Le service existe déjà");
            this.spinner.hide();
            location.href = "#/DiagnosticTestDash"
          }

        }
      })
    }
  }
  public delete(sno: any) {

    for (let i = 0; i < this.qwerty.length; i++) {

      if (sno == this.qwerty[i].Sno) {

        this.qwerty.splice(i, 1);
      }
    }

  }
}
