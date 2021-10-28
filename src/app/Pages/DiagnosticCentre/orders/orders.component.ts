import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from "@angular/common";
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
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
    // var kkk = this.SDate.setDate(this.SDate.getDate() - 0);
    // var lll = this.EDate.setDate(this.EDate.getDate() + 7);

    // const format = 'yyyy-MM-dd';
    // const myDate = new Date();
    // const locale = 'en-US';
    // this.todaydate = formatDate(myDate, format, locale);


    // this.startdate = formatDate(kkk, format, locale);
    // this.enddate = formatDate(lll, format, locale);
    
    this.getlanguage();

    this.MediTestService.GetAdmin_DiagnosticLoginOrdersAndOrderReport_Label(this.languageid).subscribe(

      data => {

        this.labels = data[0];
      }, error => {
      }
    )


    this.diagnosticid = 258;

    this.MediTestService.GetAdmin_DoctorMyAppointments_Label(1).subscribe(
      data => {

        this.labels4 = data[0];

      }, error => {
      }
    )

  }




  public getlanguage() {
    debugger;
    this.MediTestService.GetDiagnosticAppointmentsByDiagnosticID(258, '2021-10-01', '2021-12-01', 1).subscribe(
      data => {
        debugger
        this.diagnosticlist = data;
      }, error => {
      }
    )
    this.MediTestService.GetAdmin_DiagnosticLoginOrdersAndOrderReport_Label(1).subscribe(

      data => {

        this.labels = data;
      }, error => {
      }
    )
    this.MediTestService.GetAdmin_DoctorMyAppointments_Label(1).subscribe(
      data => {

        this.labels4 = data;

      }, error => {
      }
    )
    this.MediTestService.GetAdmin_LoginPage_Labels(1).subscribe(
      data => {

        this.labels1 = data;
      }, error => {
      }
    )
  }
  public getdiagnosticAppointmentsbyid() {
    debugger;


  }

}
