import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(private MediTestService: MediTestService) { }

  ngOnInit(): void {


    this.GetPatientRegistrationWeb();
  }
  registeredpatients: any;
  public GetPatientRegistrationWeb() {
    debugger
    this.MediTestService.GetPatientRegistrationWeb().subscribe(

      data => {

        this.registeredpatients = data;
      }, error => {
      }
    )

  }

}
