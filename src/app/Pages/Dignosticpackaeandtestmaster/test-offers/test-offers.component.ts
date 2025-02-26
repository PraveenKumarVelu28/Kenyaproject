import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-test-offers',
  templateUrl: './test-offers.component.html',
  styleUrls: ['./test-offers.component.css'],
})
export class TestOffersComponent implements OnInit {
  id: any;
  constructor(
    public docservice: MediTestService,
    private activatedroute: ActivatedRoute,
    public router: Router,
    private Datepipe: DatePipe
  ) {}
  myteamlist: any;
  ngOnInit() {
    this.radoi1 = 'Test';
    this.activatedroute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id == undefined) {
      } else if (this.id != undefined) {
        this.docservice.Gettestoffers().subscribe((data) => {
          this.myteamlist = data;
          var list = this.myteamlist.filter(
            (x: { id: any }) => x.id == this.id
          );
          this.StartDate = this.Datepipe.transform(
            list[0].startDate,
            'yyyy-MM-dd'
          );
          this.EndDate = this.Datepipe.transform(list[0].endDate, 'yyyy-MM-dd');
          this.Offer_Description = list[0].offer_Description;
          this.Percentage = list[0].percentage;
        });
      }
    });
    this.getpackages();
    this.gettest();
    this.testid = 0;
    this.packageid = 0;
  }

  dummlist: any;
  testid: any;
  StartDate: any;
  EndDate: any;
  Percentage: any;

  radoi1: any;

  public getpackages() {
    debugger;
    this.docservice.GetDiagnosticCenterPackages(1).subscribe(
      (data) => {
        this.dummpackagelist = data;
      },
      (error) => {}
    );
  }
  packageid: any;
  dummpackagelist: any;
  public gettest() {
    this.docservice.GetDiagnosticCenterTestsForDash(1).subscribe(
      (data) => {
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
      },
      (error) => {}
    );
  }
  public showphoto: any = [];
  public attachments: any = [];
  public attachmentsurl: any = [];
  public dummshowsignatureurl: any = [];
  public onattachmentUpload(abcd: any) {
    debugger;
    this.dummshowsignatureurl = [];
    // for (let i = 0; i < abcd.length; i++) {
    this.attachments.push(abcd.addedFiles[0]);
    this.uploadattachments();
    // }
    Swal.fire('Added Successfully');
    abcd.length = 0;
  }

  public uploadattachments() {
    debugger;
    this.docservice.DiagnosticPhotos(this.attachments).subscribe((res) => {
      this.attachmentsurl.push(res);
      this.dummshowsignatureurl.push(res);
      let a = this.dummshowsignatureurl[0].slice(2);

      let b = 'https://103.12.1.76' + a;

      this.showphoto.push(b);
      this.attachments.length = 0;
    });
    // this.sendattachment();
  }

  Offer_Description: any;
  imageurl: any;
  public InsertDetailes() {
    debugger;
    var entity = {
      TestId: 1,
      PackageId: 1,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Percentage: this.Percentage,
      Offer_Description: this.Offer_Description,
      imageurl: this.attachmentsurl[0],
    };
    this.docservice.InsertTestOffers(entity).subscribe((res) => {
      Swal.fire('Success', 'Saved successfully');
      this.router.navigate(['/Testoffersdashbaord']);
    });
  }
  public UpdateDetailes() {
    debugger;
    var entity = {
      ID: this.id,
      TestId: 1,
      PackageId: 1,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      Percentage: this.Percentage,
    };
    this.docservice.UpdateTestOffers(entity).subscribe((res) => {
      Swal.fire('Success', 'Updated successfully');
      this.router.navigate(['/Testoffersdashbaord']);
    });
  }
}
