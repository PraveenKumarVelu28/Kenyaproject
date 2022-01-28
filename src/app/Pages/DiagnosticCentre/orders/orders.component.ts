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
  base64textString: any;
  constructor(public MediTestService: MediTestService, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    debugger
    this.showtable = 0;
    this.diagnosticid = localStorage.getItem('DiagnosticId');
    // var kkk = this.SDate.setDate(this.SDate.getDate() - 0);
    // var lll = this.EDate.setDate(this.EDate.getDate() + 7);

    // const format = 'dd-mm-yyyy';
    // const myDate = new Date();
    // const locale = 'en-US';
    // this.todaydate = formatDate(myDate, format, locale);


    // this.startdate = formatDate(kkk, format, locale);
    // this.enddate = formatDate(lll, format, locale);
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
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
        this.diagnosticlist = data.filter(x => x.deliverPatnerAssigned == null && x.diagReportURL == null);
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
  public getdiagnosticAppointmentsbyid(details: any) {
    debugger;
    this.orderid = details.id;
    this.useremail = details.emailID;
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
      this.Comments = '';
      this.sendAzureNotification2();
      this.ngOnInit();
    })

  }

  myteamlist: any;
  public GetMyTeam() {
    debugger;
    this.MediTestService.GetMyTeam(this.diagnosticid).subscribe(data => {
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
      swal.fire('Accepted Successfully');
      this.MediTestService.GetDiagnosticAppointmentsByDiagnosticIDMediTest(this.diagnosticid, '2021-10-01', '2022-12-01', 1).subscribe(
        data => {
          debugger
          let temp: any = data.filter(x => x.id == id);
          let orderid = temp[0].mediOrderID;
          this.useremail = temp[0].emailID;
          this.MediTestService.GetMediTestOrderDetailsNewWeb().subscribe(data => {
            debugger
            let temp1: any = data.filter(x => x.orderid == orderid);
            this.base64textString = temp1[0].reciept;
            var entity1 = {
              'ID': id,
              'FileName': id,
              'FileType': 'pdf',
              'modifieddate': new Date(),
              'Base64Data': this.base64textString,
            }
            this.MediTestService.UploadReciept(entity1).subscribe(res => {
              let test = res;
              swal.fire('Accepted Successfully');
              this.sendAzureNotification();
              this.ngOnInit();
            })
          })



        }, _error => {
        }
      )


      // this.ngOnInit();
    })

  }
  useremail: any;
  public sendAzureNotification() {
    debugger
    var entity = {
      'Description': "Diagnostic Center Accepted Your Order.",
      'EmailID': this.useremail,
    }
    this.MediTestService.PostGCMNotifications(entity).subscribe(data => {

      if (data != 0) {

      }
    })

  }
  public sendAzureNotification1() {
    debugger
    var entity = {
      'Description': "Diagnostic Center Rejected Your Order.",
      'EmailID': this.useremail,
    }
    this.MediTestService.PostGCMNotifications(entity).subscribe(data => {

      if (data != 0) {

      }
    })

  }


  public sendAzureNotification2() {
    debugger
    var entity = {
      'Description': "Phlebotomist has been Assigned for your Order to collect Sample.",
      'EmailID': this.useremail,
    }
    this.MediTestService.PostGCMNotifications(entity).subscribe(data => {

      if (data != 0) {

      }
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
      this.MediTestService.GetDiagnosticAppointmentsByDiagnosticIDMediTest(this.diagnosticid, '2021-10-01', '2022-12-01', 1).subscribe(
        data => {
          debugger
          let temp: any = data.filter(x => x.id == id);
          let orderid = temp[0].mediOrderID;
          this.useremail = temp[0].emailID;
          this.MediTestService.GetMediTestOrderDetailsNewWeb().subscribe(data => {
            let temp1: any = data.filter(x => x.orderid == orderid);
            this.base64textString = temp1[0].reciept;
            var entity1 = {
              'ID': id,
              'FileName': id,
              'FileType': 'pdf',
              'modifieddate': new Date(),
              'Base64Data': this.base64textString,
            }
            this.MediTestService.UploadReciept(entity1).subscribe(res => {
              let test = res;
              swal.fire('Rejected Successfully');
              this.sendAzureNotification1();
              this.ngOnInit();
            })
          })



        }, _error => {
        }
      )


    })

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
  photos: any;
  photo1: any;
  public getPrescriptionPhotos(id: any) {
    debugger

    this.MediTestService.GetDiagnosticAppointmentPhotos().subscribe(data => {
      this.photos = data.filter(x => x.diagAppID == id)
      this.photo1 = this.photos[0].attachment;
    })

  }
  showPdf() {
    const linkSource = 'data:application/pdf;base64,' + 'eyJNZXNzYWdlIjoiQW4gZXJyb3IgaGFzIG9jY3VycmVkLiJ9';
    const downloadLink = document.createElement("a");
    const fileName = "sample.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

  term: any;
  public UpdatePrice(id: any) {
    this.orderid = id;
  }
  price: any;
  public UpdateNewPrice() {
    debugger
    var entity = {
      'ID': this.orderid,
      'Amount': this.price
    }
    this.MediTestService.UpdateNewPrice(entity).subscribe(res => {
      let test = res;
      this.Comments = '';
      swal.fire('Updated Successfully')
      this.ngOnInit();
    })
  }


  public SendSMSCheck() {
    debugger
    this.MediTestService.SendSMS().subscribe((res: any) => {
      debugger
      let test = res;

    })
  }
  showtable: any

  public phbworkingdetails: any;
  public getphbstaffid() {
    debugger
    this.MediTestService.GetAssigned_Phlebotomist_Details(this.todaydate, this.staffid).subscribe((res: any) => {
      debugger
      this.showtable = 1;
      this.phbworkingdetails = res;


    })
  }
}
