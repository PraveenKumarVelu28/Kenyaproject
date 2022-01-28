import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from "@angular/common";
import * as XLSX from 'xlsx';
import swal from 'sweetalert2';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-assignedappoitments',
  templateUrl: './assignedappoitments.component.html',
  styleUrls: ['./assignedappoitments.component.css']
})
export class AssignedappoitmentsComponent implements OnInit {

  public labels: any;
  public labels1: any;
  startdate: any
  labels4: any;
  enddate: any;
  SDate: any;
  EDate: any;
  diagnosticid: any;
  diagnosticlist: any;
  todaydate: any;
  Search: any;
  public languageid: any;
  constructor(public MediTestService: MediTestService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    debugger
    this.diagnosticid = localStorage.getItem('DiagnosticId');
    // var kkk = this.SDate.setDate(this.SDate.getDate() - 0);
    // var lll = this.EDate.setDate(this.EDate.getDate() + 7);

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);


    // this.startdate = formatDate(kkk, format, locale);
    // this.enddate = formatDate(lll, format, locale);
    this.staffid = 0;
    this.GetMyTeam();
    this.getlanguage();

    this.MediTestService.GetAdmin_DiagnosticLoginOrdersAndOrderReport_Label(1).subscribe(

      data => {

        this.labels = data[0];
      }, error => {
      }
    )




    this.MediTestService.GetAdmin_DoctorMyAppointments_Label(1).subscribe(
      data => {

        this.labels4 = data[0];

      }, error => {
      }
    )

  }




  public getlanguage() {
    debugger;
    this.MediTestService.GetDiagnosticAppointmentsByDiagnosticIDMediTest(this.diagnosticid, '2021-10-01', '2022-12-01', 1).subscribe(
      data => {
        debugger
        this.diagnosticlist = data.filter(x => x.deliverPatnerAssigned != null && x.diagReportURL == null);
      }, _error => {
      }
    )
    this.MediTestService.GetAdmin_DiagnosticLoginOrdersAndOrderReport_Label(1).subscribe(

      data => {

        this.labels = data;
      }, _error => {
      }
    )
    this.MediTestService.GetAdmin_DoctorMyAppointments_Label(1).subscribe(
      data => {

        this.labels4 = data;

      }, _error => {
      }
    )
    this.MediTestService.GetAdmin_LoginPage_Labels(1).subscribe(
      data => {

        this.labels1 = data;
      }, error => {
      }
    )
  }
  orderid: any;
  public getdiagnosticAppointmentsbyid(id: any) {
    debugger;
    this.orderid = id
  }

  staffid: any;
  Comments: any;

  public UpdateOrders() {
    debugger;
    var entity = {
      'ID': this.orderid,
      'DeliverPatnerAssigned': 1,
      'Comments': this.Comments,
      'staffid': this.staffid
    }
    this.MediTestService.UpdateOrders(entity).subscribe(res => {
      let test = res;
      Swal.fire(' Updated Successfully');
      this.ngOnInit();
    })

  }

  myteamlist: any;
  public GetMyTeam() {
    debugger;
    this.MediTestService.GetMyTeam(280).subscribe(data => {
      this.myteamlist = data;

    })
  }

  public AcceptOrder(id: any) {
    debugger
    var entity = {
      'ID': id,
    }
    this.MediTestService.AcceptOrder(entity).subscribe(res => {
      let test = res;
      swal.fire('Order Accepted Successfully')
      this.ngOnInit();
    })

  }


  public RejecttOrder(id: any) {
    debugger
    debugger
    var entity = {
      'ID': id,
    }
    this.MediTestService.RejectOrder(entity).subscribe(res => {
      let test = res;
      swal.fire('Order Accepted Successfully')
      this.ngOnInit();
    })

  }

  public Visitedtooffice(details: any) {
    debugger
  }

  public dummshowsignatureurl: any = []
  public onattachmentUpload(abcd: any) {
    this.dummshowsignatureurl = []
    // for (let i = 0; i < abcd.length; i++) {
    this.attachments.push(abcd.addedFiles[0]);
    this.uploadattachments();
    // }
    Swal.fire('Added Successfully');
    abcd.length = 0;

  }
  photo: any

  public attachments: any = [];
  public attachmentsurl: any = [];
  public uploadattachments() {
    debugger
    this.MediTestService.DiagnosticPhotos(this.attachments).subscribe(res => {

      this.attachmentsurl.push(res);
      this.dummshowsignatureurl.push(res);
      let a = this.dummshowsignatureurl[0].slice(2);
      let b = 'https://23.101.22.93' + a;

      this.photo = b;
      this.attachments.length = 0;

      console.log(b);




    })
    // this.sendattachment();
  }

  public UploadReport() {
    debugger

    var entity = {
      'ID': this.orderid,
      'File': this.attachmentsurl[0]
    }
    this.MediTestService.UploadReport(entity).subscribe(res => {
      let test = res;
      swal.fire('Report Uploded Successfully')
      this.ngOnInit();
    })
  }

}
