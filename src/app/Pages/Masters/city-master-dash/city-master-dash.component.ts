import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MediTestService } from '../../../medi-test.service';

@Component({
  selector: 'app-city-master-dash',
  templateUrl: './city-master-dash.component.html',
  styleUrls: ['./city-master-dash.component.css']
})
export class CityMasterDashComponent implements OnInit {

  constructor(public MediTestService: MediTestService, private router: Router, private spinner: NgxSpinnerService) { }
  public labels:any;
  public languageid:any;
  public cityslist:any;
  public term:any;
  public countryid:any;
  public cityid:any;
  public countrylist:any;
  public citylist:any;
  public dummlist:any;
  ngOnInit() {
    this.languageid = localStorage.getItem('LanguageID');
    this.getlanguage();
    this.getcitymasters()
    this.GetCountryMaster()
    this.countryid = 0
    this.getcity();
this.cityid = 0
  }
  public getlanguage() {
    debugger;
    this.MediTestService.GetAdmin_Masters_labels(this.languageid).subscribe(
      data=> {
       
        this.labels = data;
      }, error => {
      }
    )
  }
  public getcitymasters() {
    debugger;
    this.MediTestService.GetAreaMasterByLangID(this.languageid).subscribe(
      data => {
       
        this.cityslist = data;
        this.dummlist= this.cityslist
      }, error => {
      }
    )
  }


  public GetCountryMaster() {
    debugger;
    this.MediTestService.GetCountryMasterByLanguageID(this.languageid).subscribe(
      data => {
       
        this.countrylist = data;

      }, error => {
      }
    )
  }
  public GetCountryID(even:any) {
    debugger;
    if (even.target.value != 0) {
     
      this.countryid = even.target.value;

      this.cityslist = this.dummlist.filter((x: { countryID: any; }) => x.countryID == this.countryid)
      
      this.getcity();
    }
    else if (even.target.value == 0) {
      this.getcitymasters()
    }
  }

  public getcity() {
   debugger;
    this.MediTestService.GetCityMasterBYIDandLanguageID(this.countryid, this.languageid).subscribe(
      data => {
       
        this.citylist = data;
      }, error => {
      }
    )
  }


  public GetCityID(even:any) {
    debugger;
    if (even.target.value != 0) {
     
      this.cityid = even.target.value;

      this.cityslist = this.dummlist.filter((x: { cityID: any; }) => x.cityID == this.cityid)
   
    }
    else if (even.target.value == 0) {
      this.getcity()
    }
  }
  // public DeleteAreaMaster(id) {
   
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You Want to Delete This City!",
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.value) {
  //       this.MediTestService.DeleteAreaMaster(id).subscribe(res => {
  //         let test = res;
  //         this.getcitymasters()
  //       })
  //       Swal.fire(
  //         'Deleted!',
  //         'City has been deleted.',
  //         'success'
  //       )
  //     }
  //     else {
  //       this.getcitymasters()
  //     }
  //   })
  // }
}
