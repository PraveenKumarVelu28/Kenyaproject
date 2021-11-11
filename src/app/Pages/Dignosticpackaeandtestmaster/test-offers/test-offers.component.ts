import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-test-offers',
  templateUrl: './test-offers.component.html',
  styleUrls: ['./test-offers.component.css']
})
export class TestOffersComponent implements OnInit {

  constructor(public docservice: MediTestService, private activatedroute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.radoi1='Test'
    this.getpackages();
    this.gettest();
    this.testid = 0;
    this.packageid = 0;
  }

  dummlist: any
  testid: any
  StartDate: any
  EndDate: any
  Percentage: any

  radoi1: any

  public getpackages() {
    debugger;
    this.docservice.GetDiagnosticCenterPackages(1).subscribe(
      data => {

        this.dummpackagelist = data;

      }, error => {
      }
    )
  }
  packageid: any;
  dummpackagelist: any;
  public gettest() {
    this.docservice.GetDiagnosticCenterTestsForDash(1).subscribe(
      data => {

        this.dummlist = data;

        // this.diatestdd = {
        //   singleSelection: true,
        //   idField: 'id',
        //   textField: 'short',
        //   selectAllText: 'Select All',
        //   unSelectAllText: 'UnSelect All',
        //   //  itemsShowLimit: 3,
        //   allowSearchFilter: true,
        //   searchPlaceholderText: this.searchlable,
        // };

      }, error => {
      }
    )
 
  }

  public InsertDetailes() {
    debugger
    var entity = {
      TestId: this.testid,
      PackageId: this.packageid,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Percentage: this.Percentage,

    }
    this.docservice.InsertTestOffers(entity).subscribe(res => {
      Swal.fire('Success', 'Saved successfully')
      this.router.navigate(["/Staffdashboard"])
    })
  }


}
