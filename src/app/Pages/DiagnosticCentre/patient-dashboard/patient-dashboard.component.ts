import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {
  term: any
  constructor(private MediTestService: MediTestService) { }
  todaydate: any;
  ngOnInit(): void {

    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    this.todaydate = formatDate(myDate, format, locale);
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

  public DisablePatient(id: any) {
    var eb = {
      'ID': id,
      'Enable_Disable': 1
    }
    this.MediTestService.DisablePatient(eb).subscribe(

      data => {
        debugger
        Swal.fire('Updated successfully.');
        location.reload();
      },
    )

  }




}
