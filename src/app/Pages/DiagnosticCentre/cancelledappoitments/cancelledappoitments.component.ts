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
  selector: 'app-cancelledappoitments',
  templateUrl: './cancelledappoitments.component.html',
  styleUrls: ['./cancelledappoitments.component.css']
})
export class CancelledappoitmentsComponent implements OnInit {

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
  public languageid: any;
  constructor(public MediTestService: MediTestService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    debugger
    this.diagnosticid = localStorage.getItem('DiagnosticId');
    // var kkk = this.SDate.setDate(this.SDate.getDate() - 0);
    // var lll = this.EDate.setDate(this.EDate.getDate() + 7);

    // const format = 'yyyy-MM-dd';
    // const myDate = new Date();
    // const locale = 'en-US';
    // this.todaydate = formatDate(myDate, format, locale);


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
        this.diagnosticlist = data;
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

}

