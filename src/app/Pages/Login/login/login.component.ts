import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { MediTestService } from '../../../medi-test.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(public MediTestService: MediTestService, private router: Router, private spinner: NgxSpinnerService) { }

  public roleid: any;
  public rolelist: any;
  public result: any;
  public uname: any;
  public pwd: any;
  public wname: any;
  public userid: any;
  public loginname: any;
  public languagelist: any;
  public LanguageID: any;
  public languageid: any;
  public adminid: any;
  public countrylist: any;
  public countryid: any;
  public countrydetails: any;
  public host: any;
  public labels: any;
  public Showpass: any;
  public pinno: any;

  ngOnInit(): void {
    this.Showpass = 1;
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 100);
    this.languageid = localStorage.getItem('LanguageID');

    this.getlang()
  }

  public getlang() {
    this.MediTestService.GetLanguageMaster().subscribe(
      data => {

        this.languagelist = data;
      }, error => {
      }
    )
  }
  public GetLanguageID(even: any) {

    this.LanguageID = even.target.value;
    this.getlanguage();
    localStorage.setItem('LanguageID', this.LanguageID);

  }
  public getlanguage() {
    this.MediTestService.Getloginlabel(this.LanguageID).subscribe(
      data => {

        this.labels = data;
      }, error => {
      }
    )
  }

  public login() {
    debugger
    if (this.roleid == null || this.roleid == undefined) {
      if (this.LanguageID == 1) {
        Swal.fire('Error', 'Please select role!');
      }
      if (this.LanguageID == 6) {
        Swal.fire('Erreur', 'Sélectionner une fonction!');
      }
    }
    // if (this.uname == null || this.pwd == undefined) {
    //   Swal.fire('Error', 'Please Enter UserName and Password!');
    // }
    else {
      if (this.roleid == "1") {
        if (this.uname === 'admin' || this.pwd === "welcome") {
          localStorage.setItem('UserName', 'Admin');
          localStorage.setItem('userid', '0');
          localStorage.setItem('temp', '1');
          localStorage.setItem('role', 'Admin');
          localStorage.setItem('roleid', '1');
          //location.href = "#/Dignosticdashboard";
          this.router.navigate(["/Dignosticdashboard"])
            .then(() => {
              window.location.reload();
            });
        }
      }

    }
  }


  // if (this.roleid == "21") {
  //   this.docservice.GetUsers_RoleMappingByUnameAndPwd(this.uname, this.pwd, localStorage.getItem('WebUrl'),this.roleid).subscribe(
  //     data => {
  //       this.result = data;
  //       if (this.result.length != '0') {
  //         localStorage.setItem('user', this.result[0].firstName)
  //         localStorage.setItem('roleid', '21');
  //         localStorage.setItem('supportid', this.result[0].id);
  //         sessionStorage.setItem('temp', '1');
  //          location.href = '#/AdminDash';
  //         location.reload();
  //       }
  //       else {
  //         Swal.fire('Error', 'Username or Password is not valid!');
  //         this.uname = "";
  //         this.pwd = "";
  //       }
  //     }, error => {
  //     }
  //   )
  // }



  public onchangeFunction(even: any) {

    this.roleid = even.target.value;
    localStorage.setItem('roleid', this.roleid);
  }

  public hidepassord() {
    this.Showpass = 0;
  }

  public showpassword() {
    this.Showpass = 1;
  }

}
