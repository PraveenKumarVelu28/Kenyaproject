import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-dig-dashboard',
  templateUrl: './dig-dashboard.component.html',
  styleUrls: ['./dig-dashboard.component.css']
})
export class DigDashboardComponent implements OnInit {

  constructor(public docservice: MediTestService, private spinner: NgxSpinnerService, private activatedroute: ActivatedRoute) { }
  totalrevenue: any;
  totalrevenuewallet: any;
  totalrevenucredit: any;
  totalrevenucod: any;
  totalrevenumpesa: any;
  allaptnments: any;
  accpetedaptnments: any;
  visitedaptnments: any;
  todaydate: any;
  edate: any;
  ngOnInit(): void {

    debugger

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.edate = formatDate(myDate, format, locale);

    this.docservice.GetDiagnosticAppointmentsByDiagnosticIDMediTest(localStorage.getItem('DiagnosticId'), '2021-10-01', '2022-12-01', 1).subscribe(
      data => {
        debugger
        let tmp: any = data;
        this.allaptnments = tmp.length;
        this.accpetedaptnments = data.filter((x: { acceptedBit: number; }) => x.acceptedBit == 1).length;
        this.visitedaptnments = data.filter((x: { labReportID: null; }) => x.labReportID != null).length;
      }, _error => {
      }
    )

    this.docservice.GetPatient_WalletLog().subscribe(
      data => {

        let temp: any = data.filter(x => x.diagnosticCenterID == localStorage.getItem('DiagnosticId'));
        let total: any = 0;
        temp.forEach((element: { totalPrice: any; }) => {
          total += Number(element.totalPrice);
        });
        this.totalrevenue = total;

        let total1: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 1).forEach((element: { totalPrice: any; }) => {
          total1 += Number(element.totalPrice);
        });
        this.totalrevenuewallet = total1;

        let total2: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 2).forEach((element: { totalPrice: any; }) => {
          total2 += Number(element.totalPrice);
        });
        this.totalrevenucredit = total2;

        let total3: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 3 || x.paymentType == 0).forEach((element: { totalPrice: any; }) => {
          total3 += Number(element.totalPrice);
        });
        this.totalrevenucod = total3;

        let total4: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 4).forEach((element: { totalPrice: any; }) => {
          total4 += Number(element.totalPrice);
        });
        this.totalrevenumpesa = total4;

      },
      error => { }
    );
  }


  public applydatefilter() {
    debugger
    this.docservice.GetDiagnosticAppointmentsByDiagnosticIDMediTest(localStorage.getItem('DiagnosticId'), '2021-10-01', '2029-12-01', 1).subscribe(
      data => {
        debugger
        let tmp: any = data.filter(x => (x.formatdate >= this.todaydate && x.formatdate <= this.edate));
        this.allaptnments = tmp.length;
        this.accpetedaptnments = tmp.filter((x: { acceptedBit: number; }) => x.acceptedBit == 1).length;
        this.visitedaptnments = tmp.filter((x: { labReportID: null; }) => x.labReportID != null).length;
      }, _error => {
      }
    );


    this.docservice.GetPatient_WalletLog().subscribe(
      data => {

        let temp: any = data.filter(x => x.diagnosticCenterID == localStorage.getItem('DiagnosticId') && (x.formatdate >= this.todaydate && x.formatdate <= this.edate));
        let total: any = 0;
        temp.forEach((element: { totalPrice: any; }) => {
          total += Number(element.totalPrice);
        });
        this.totalrevenue = total;

        let total1: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 1).forEach((element: { totalPrice: any; }) => {
          total1 += Number(element.totalPrice);
        });
        this.totalrevenuewallet = total1;

        let total2: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 2).forEach((element: { totalPrice: any; }) => {
          total2 += Number(element.totalPrice);
        });
        this.totalrevenucredit = total2;

        let total3: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 3 || x.paymentType == 0).forEach((element: { totalPrice: any; }) => {
          total3 += Number(element.totalPrice);
        });
        this.totalrevenucod = total3;

        let total4: any = 0;
        temp.filter((x: { paymentType: number; }) => x.paymentType == 4).forEach((element: { totalPrice: any; }) => {
          total4 += Number(element.totalPrice);
        });
        this.totalrevenumpesa = total4;

      },
      error => { }
    );
  }

}
