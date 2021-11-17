import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MediTestService } from '../../../medi-test.service';

@Component({
  selector: 'app-country-master-dash',
  templateUrl: './country-master-dash.component.html',
  styleUrls: ['./country-master-dash.component.css']
})
export class CountryMasterDashComponent implements OnInit {

  constructor(public MediTestService: MediTestService, private router: Router, private spinner: NgxSpinnerService) { }
  public labels: any;
  public languageid: any;
  public countrylist: any;
  public term: any;

  ngOnInit() {
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
    debugger
    this.MediTestService.GetCountryMasterByLanguageID(this.languageid).subscribe(
      data => {

        let temp: any = data;
        this.countrylist = temp.listObject;
      }, error => {
      }
    )
  }


  public DeleteCountryMaster(id: any) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You Want to Delete This Country!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.MediTestService.DeleteCountryMaster(id).subscribe(res => {
          let test = res;
          this.GetCountryMaster();
        })
        Swal.fire(
          'Deleted!',
          'Country has been deleted.',
          'success'
        )
      }
      else {
        this.GetCountryMaster();
      }
    })
  }
}
