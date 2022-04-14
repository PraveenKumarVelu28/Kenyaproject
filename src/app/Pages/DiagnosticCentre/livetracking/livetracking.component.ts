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
  selector: 'app-livetracking',
  templateUrl: './livetracking.component.html',
  styleUrls: ['./livetracking.component.css']
})
export class LivetrackingComponent implements OnInit {
  date: any;
  staffid: any;
  myteamlist: any;
  todaydate: any;
  diagnosticid: any;
  constructor(public MediTestService: MediTestService, private activatedroute: ActivatedRoute, private sanitizer: DomSanitizer) { }
  url: any;
  ngOnInit(): void {
    this.diagnosticid = localStorage.getItem('DiagnosticId');
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
    this.GetMyTeam();


  }

  public getphbstaffid() {
    debugger
    document.getElementById('map')?.setAttribute('src', 'http://23.101.22.93/MeditestGoogleMaps/#/Maps/' + this.staffid + '/' + this.todaydate)
    // this.url = this.transform(url1)
  }

  public GetMyTeam() {
    debugger;
    this.MediTestService.GetMyTeam(this.diagnosticid).subscribe(data => {
      this.myteamlist = data;
      this.staffid = this.myteamlist[0].id;

      document.getElementById('map')?.setAttribute('src', 'http://23.101.22.93/MeditestGoogleMaps/#/Maps/' + this.staffid + '/' + this.todaydate)


    })
  }

  public getdate() {
    debugger
    document.getElementById('map')?.setAttribute('src', 'http://23.101.22.93/MeditestGoogleMaps/#/Maps/' + this.staffid + '/' + this.todaydate)
  }



}
