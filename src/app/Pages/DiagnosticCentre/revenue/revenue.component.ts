import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  constructor(public docservice: MediTestService, private spinner: NgxSpinnerService, private activatedroute: ActivatedRoute) { }
  packagelist: any;
  term: any;
  totalamount: any;
  ngOnInit(): void {
    debugger
    this.MonthID = 0;
    this.docservice.GetPatient_WalletLog().subscribe(
      data => {

        this.packagelist = data;
        this.totalamount = this.packagelist[0].totalamount

      },
      error => { }
    );
  }

  MonthID: any;
  public GetMonthID(event: any) {
    debugger
    this.MonthID = event.target.value;

    if (this.MonthID == 0) {
      this.docservice.GetPatient_WalletLog().subscribe(
        data => {

          this.packagelist = data;
          this.totalamount = this.packagelist[0].totalamount

        },
        error => { }
      );
    } else {
      this.docservice.GetPatient_WalletLog().subscribe(
        data => {

          this.packagelist = data.filter(x => x.month == this.MonthID);
          this.totalamount = this.packagelist[0].totalamount;

        },
        error => { }
      );
    }
  }


  fileName = 'Revenue.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('lvs');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

}
