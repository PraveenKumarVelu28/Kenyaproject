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
    this.radoi1 = 'Test'
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
  public showphoto: any=[];
  public attachments: any = [];
  public attachmentsurl: any = [];
  public dummshowsignatureurl: any = []
  public onattachmentUpload(abcd: any) {
    debugger
    this.dummshowsignatureurl = []
    // for (let i = 0; i < abcd.length; i++) {
    this.attachments.push(abcd.addedFiles[0]);
    this.uploadattachments();
    // }
    Swal.fire('Added Successfully');
    abcd.length = 0;

  }

  public uploadattachments() {
    debugger
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


  Offer_Description: any;
  imageurl: any;
  public InsertDetailes() {
    debugger
    var entity = {
      TestId: 1,
      PackageId: 1,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Percentage: 10,
      Offer_Description: this.Offer_Description,
      imageurl: this.attachmentsurl[0]

    }
    this.docservice.InsertTestOffers(entity).subscribe(res => {
      Swal.fire('Success', 'Saved successfully')
      this.router.navigate(["/Testoffersdashbaord"])
    })
  }


}
