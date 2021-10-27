import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MediTestService } from '../../../medi-test.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-master',
  templateUrl: './country-master.component.html',
  styleUrls: ['./country-master.component.css']
})
export class CountryMasterComponent implements OnInit {

  constructor(public MediTestService: MediTestService, private router: Router, private spinner: NgxSpinnerService, private activatedroute: ActivatedRoute) { }
  public labels: any;
  public languageid: any;
  public countryname: any;
  public countryid: any;
  public countrylist: any;
  public showbit: any;

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {

      this.countryid = params['id'];
      if (this.countryid == undefined) {
        this.showbit = 0;
      }
      else if (this.countryid != undefined) {
        this.showbit = 1;
      }
    }
    )
    this.languageid = localStorage.getItem('LanguageID');
    this.getlanguage();
    this.GetCountryMaster();
  }
  public getlanguage() {
    this.MediTestService.GetAdmin_Masters_labels(this.languageid).subscribe(
      data => {

        this.labels = data;
      }, error => {
      }
    )
  }

  public GetCountryMaster() {
    this.MediTestService.GetCountryMasterByLanguageID(this.languageid).subscribe(
      data => {

        this.countrylist = data;

        var list = this.countrylist.filter((x: { id: any; }) => x.id == this.countryid)
        this.countryname = list[0].short
      }, error => {
      }
    )
  }






  public insertdetails() {
    var entity = {
      'Short': this.countryname,
      'LanguageID': 1
    }
    this.MediTestService.InsertCountryMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire('Success', 'Details Saved Successfully');
        location.href = "#/CountryMasterDash"
      }
    })
  }

  public updatedetails() {
    var entity = {
      'ID': this.countryid,
      'Short': this.countryname,
      'LanguageID': this.languageid
    }
    this.MediTestService.UpdateCountryMaster_Web(entity).subscribe(data => {
      let res = data;
      Swal.fire('Success', 'Details Updated Successfully');

      this.router.navigate(["/CountryMasterDash"])
        .then(() => {

        });

    });




  }
}
