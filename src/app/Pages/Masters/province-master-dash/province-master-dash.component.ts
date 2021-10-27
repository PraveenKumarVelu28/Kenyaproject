import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MediTestService } from '../../../medi-test.service';


@Component({
  selector: 'app-province-master-dash',
  templateUrl: './province-master-dash.component.html',
  styleUrls: ['./province-master-dash.component.css']
})
export class ProvinceMasterDashComponent implements OnInit {

  constructor(public MediTestService: MediTestService, private router: Router, private spinner: NgxSpinnerService) { }
  public labels: any;
  public languageid: any;
  public citylist: any;
  public provincelist: any;
  public term: any;
  public countrylist: any;
  public countryid: any;
  public dummlist: any;
  public cityid: any;
  ngOnInit() {
    this.languageid = localStorage.getItem('LanguageID');
    this.getlanguage();
    this.getprobincelist();
    this.GetCountryMaster()
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

      }, error => {
      }
    )
  }
  public GetCountryID(even: any) {
    if (even.target.value != 0) {

      this.countryid = even.target.value;

      this.provincelist = this.dummlist.filter((x: { countryID: any; }) => x.countryID == this.countryid)

      this.getcity();
    }
    else if (even.target.value == 0) {
      this.getprobincelist()
    }
  }

  public getcity() {

    this.MediTestService.GetCityMasterBYIDandLanguageID(this.countryid, this.languageid).subscribe(
      data => {

        this.citylist = data;
      }, error => {
      }
    )
  }


  public GetCityID(even: any) {
    if (even.target.value != 0) {

      this.cityid = even.target.value;

      this.provincelist = this.dummlist.filter((x: { cityID: any; }) => x.cityID == this.cityid)

    }
    else if (even.target.value == 0) {
      this.getcity()
    }
  }




  public getprobincelist() {
    this.MediTestService.GetCityMasterByLangID(this.languageid).subscribe(
      data => {

        this.provincelist = data;
        this.dummlist = this.provincelist
      }, error => {
      }
    )
  }




  public DeleteCityMaster(id:any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You Want to Delete This Province!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.MediTestService.DeleteCityMaster(id).subscribe(res => {
          let test = res;
          this.getprobincelist();
        })
        Swal.fire(
          'Deleted!',
          'Province has been deleted.',
          'success'
        )
      }
      else {
        this.getprobincelist();
      }
    })
  }

}
