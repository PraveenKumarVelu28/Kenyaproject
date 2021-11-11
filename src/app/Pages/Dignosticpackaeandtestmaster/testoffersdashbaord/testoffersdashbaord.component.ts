import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testoffersdashbaord',
  templateUrl: './testoffersdashbaord.component.html',
  styleUrls: ['./testoffersdashbaord.component.css']
})
export class TestoffersdashbaordComponent implements OnInit {

  constructor(public docservice: MediTestService, private spinner: NgxSpinnerService, private activatedroute: ActivatedRoute) { }
  packagelist: any;
  term: any
  ngOnInit(): void {
    debugger

    this.docservice.Gettestoffers().subscribe(
      data => {

        this.packagelist = data;
      },
      error => { }
    );
  }

}
