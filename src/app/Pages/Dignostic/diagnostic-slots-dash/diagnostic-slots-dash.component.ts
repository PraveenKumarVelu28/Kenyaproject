import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { formatDate } from "@angular/common";
import { NgxSpinnerService } from "ngx-spinner";
// import { NgDateRangePickerOptions } from "ng-daterangepicker";
@Component({
  selector: 'app-diagnostic-slots-dash',
  templateUrl: './diagnostic-slots-dash.component.html',
  styleUrls: ['./diagnostic-slots-dash.component.css']
})
export class DiagnosticSlotsDashComponent implements OnInit {
  // options!: NgDateRangePickerOptions;
  constructor(public docservice: MediTestService, private spinner: NgxSpinnerService) { }

  public languageid: any;
  public labels: any;
  public labels1: any;
  public Workingdetails: any;
  public diagnosticid: any;
  public dummworkingdetails: any;
  public diagnosticlist: any;

  public slotslist: any;
  public slotsdd: any;
  public slotslist1: any;
  public slotsdd1: any;
  public slotslist2: any;
  public slotsdd2: any;
  public slotslist3: any;
  public slotsdd3: any;
  public mrngslots = [];
  public afternoonslots = [];
  public evngslots = [];
  public nightslots = [];
  public tablecount: any;
  public mrngslotarray = [];
  public mrngslotarrayid = [];
  public slotname: any;
  public mrng: any;
  public slotnameid: any;
  public mrngid: any;
  public evngslotarray = [];
  public evngslotarrayid = [];
  public afternoonslotarray = [];
  public afternoonslotarrayid = [];
  public slotname1: any;
  public afternoon: any;
  public slotnameid1: any;
  public afternoonid: any;
  public slotname2: any;
  public evng: any;
  public slotnameid12: any;
  public evngid: any;
  public nightslotarray = [];
  public nightslotarrayid = [];

  public slotname3: any;
  public night: any;
  public slotnameid13: any;
  public nightid: any;
  public dropdownclear1 = [];
  public dropdownclear2 = [];
  public dropdownclear3 = [];
  public dropdownclear4 = [];
  public diadnosticdd = {};

  public dayslist: any;
  public daysdd = {}
  public dayid: any;
  public term: any;
  SelectLabel: any;
  // public dayid = []
  search: any;
  labels3: any;


  ngOnInit() {
    this.languageid = localStorage.getItem('LanguageID');
    this.diagnosticid = localStorage.getItem('diagnosticid');

  }
}
