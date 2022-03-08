import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from "@angular/common";
import * as XLSX from 'xlsx';
import swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Component({
  selector: 'app-visitedappoitments',
  templateUrl: './visitedappoitments.component.html',
  styleUrls: ['./visitedappoitments.component.css']
})
export class VisitedappoitmentsComponent implements OnInit {

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
  public loader!: boolean;
  constructor(public MediTestService: MediTestService, private activatedroute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    debugger
    this.loader = false;
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
  samplecollectionids: any = []
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  public getreportdetials(details: any) {

    debugger
    this.orderid = details.id;
    this.samplecollectionids = [];
    this.MediTestService.GetDiagnosticAppointmentsByDiagnosticIDMediTest(this.diagnosticid, '2021-10-01', '2022-12-01', 1).subscribe(
      data => {
        debugger
        let temp: any = data.filter(x => x.id == details.id);
        this.samplecollectionids.push((temp[0].labReportID));
        this.getlabreporturl(this.samplecollectionids);
      }, _error => {
      }
    )

  }
  public getlabreporturl(samplecollectionids: any) {
    debugger
    this.loader = true;
    this.MediTestService.GetLabReportfromHIS(samplecollectionids).subscribe(
      data => {
        debugger
        let result: any = data;
        this.base64textString = result.object;
        this.samplecollectionids = [];
        this.UploadReport();
        // this.downloadPdf(result.object, 'LabReport');
      }, _error => {
      }
    )
  }
  showPdf() {
    debugger
    const linkSource = 'data:application/pdf;base64,' + ' JVBERi0xLjQKJeLjz9MKMyAwIG9iago8PC9Db2xvclNwYWNlL0';
    const downloadLink = document.createElement("a");
    const fileName = "sample.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
  downloadPdf(base64String: any, fileName: any) {
    debugger
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }

  public getlanguage() {
    debugger;
    this.MediTestService.GetDiagnosticAppointmentsByDiagnosticIDMediTest(this.diagnosticid, '2021-10-01', '2022-12-01', 1).subscribe(
      data => {
        debugger
        this.diagnosticlist = data.filter(x => x.diagReportURL != null);
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
  base64textString: any
  public UploadReport() {
    debugger

    var entity = {
      'ID': this.orderid,
      'FileName': this.orderid,
      'FileType': 'pdf',
      'modifieddate': new Date(),
      'Base64Data': this.base64textString,
    }
    this.MediTestService.UploadReport(entity).subscribe(res => {
      let test = res;
      swal.fire('Report Uploded Successfully');
      this.loader = false;
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

