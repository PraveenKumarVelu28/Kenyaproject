import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-staffmaster',
  templateUrl: './staffmaster.component.html',
  styleUrls: ['./staffmaster.component.css'],
})
export class StaffmasterComponent implements OnInit {
  languageid: any;
  labels: any;
  id: any;
  showbit: any;
  name: any;
  phoneno: any;

  email: any;
  address: any;
  username: any;
  password: any;
  myteamlist: any;
  Diagnosticid: any;
  role: any;
  constructor(
    public MediTestService: MediTestService,
    private activatedroute: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit() {
    debugger;
    this.languageid = 1;
    this.Diagnosticid = localStorage.getItem('DiagnosticId');
    this.getdiagnosticforadmin();

    this.activatedroute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id == undefined) {
        this.showbit = 0;
      } else if (this.id != undefined) {
        this.showbit = 1;
        this.MediTestService.GetMyTeam(this.Diagnosticid).subscribe((data) => {
          this.myteamlist = data;
          var list = this.myteamlist.filter(
            (x: { id: any }) => x.id == this.id
          );
          (this.name = list[0].name),
            (this.phoneno = list[0].phoneNo),
            (this.email = list[0].emailID),
            (this.address = list[0].address),
            (this.username = list[0].userName),
            (this.password = list[0].password),
            (this.role = list[0].role);
        });
      }
    });
    this.MediTestService.GetAdmin_Doctorregistration_LabelsByLanguageID(
      this.languageid
    ).subscribe(
      (data) => {
        this.labels = data;
      },
      (error) => {}
    );
  }
  diagnosticlist: any;

  public getdiagnosticforadmin() {
    debugger;
    this.MediTestService.GetDiagnosticForAdminByLanguageID(1).subscribe(
      (data) => {
        this.diagnosticlist = data;
        this.Diagnosticid = localStorage.getItem('DiagnosticId');
      },
      (error) => {}
    );
  }

  public InsertDetailes() {
    debugger;
    var entity = {
      DiagnosticID: this.Diagnosticid,
      Name: this.name,
      PhoneNo: this.phoneno,
      EmailID: this.email,
      Address: this.address,
      UserName: this.username,
      LanguageID: this.languageid,
      Password: this.password,
      Role: this.role,
    };
    this.MediTestService.InsertMyTeam(entity).subscribe((res) => {
      if (this.languageid == 1) {
        Swal.fire('Success', 'Added successfully');
        this.router.navigate(['/Staffdashboard']);
      } else if (this.languageid == 6) {
        Swal.fire('Mis à jour avec Succés');
        this.router.navigate(['/Staffdashboard']);
      }
    });
  }
  public UpdateDetailes() {
    var entity = {
      ID: this.id,
      DiagnosticID: this.Diagnosticid,
      Name: this.name,
      PhoneNo: this.phoneno,
      EmailID: this.email,
      Address: this.address,
      UserName: this.username,
      Password: this.password,
    };
    this.MediTestService.UpdateMyTeam(entity).subscribe((res) => {
      if (this.languageid == 1) {
        Swal.fire('Success', 'Updated Successfully');
        location.href = '/#/Staffdashboard';
      } else if (this.languageid == 6) {
        Swal.fire('Mis à jour avec Succés');
        location.href = '/#/Staffdashboard';
      }
    });
  }
}
