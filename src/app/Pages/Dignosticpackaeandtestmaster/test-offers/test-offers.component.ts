import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-test-offers',
  templateUrl: './test-offers.component.html',
  styleUrls: ['./test-offers.component.css']
})
export class TestOffersComponent implements OnInit {

  constructor(public docservice: MediTestService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getpackages();
    this.gettest();
    this.testid=0;
    this.packageid=0;
  }

  dummlist:any
  testid:any
  StartDate:any
  EndDate:any
  Percentage:any


  
public getpackages(){
  debugger;
  this.docservice.GetDiagnosticCenterTestsForDash(1).subscribe(
    data => {

      this.dummlist = data;

    }, error => {
    }
  )
}
packageid:any;
dummpackagelist:any;
public gettest(){
this.docservice.GetDiagnosticCenterPackages(1).subscribe(
  data => {

    this.dummpackagelist = data;
   
  }, error => {
  }
)
}


}
