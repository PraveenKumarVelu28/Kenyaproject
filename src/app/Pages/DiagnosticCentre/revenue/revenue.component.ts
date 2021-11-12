import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';

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

    this.docservice.GetPatient_WalletLog().subscribe(
      data => {

        this.packagelist = data;
        this.totalamount = this.packagelist[0].totalamount

      },
      error => { }
    );
  }

}
