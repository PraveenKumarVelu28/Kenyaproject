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

    this.LanguageID = 1;
    localStorage.setItem('LanguageID', '1');
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


      else {
        if (this.roleid == "2") {
          this.MediTestService.GetDiagnosticForAdminByLanguageID(1).subscribe(
            data => {
              this.result = data.filter(x => x.username == this.uname && x.password == this.pwd);
              if (this.result.length != '0') {
                localStorage.setItem('user', this.result[0].contactPerson)

                localStorage.setItem('DiagnosticId', this.result[0].id);
                localStorage.setItem('temp', '1');
                this.router.navigate(["/Orders"])
                  .then(() => {
                    window.location.reload();
                  });
              }
              else {
                Swal.fire('Error', 'Username or Password is not valid!');
                this.uname = "";
                this.pwd = "";
              }
            }, error => {
            }
          )
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

  }

  public onchangeFunction(even: any) {
    debugger
    this.roleid = even.target.value;
    localStorage.setItem('roleid', this.roleid);
  }

  public hidepassord() {
    this.Showpass = 0;
  }

  public showpassword() {
    this.Showpass = 1;
  }

  email: any;
  Otp: any;
  newpassword: any;
  showotp: any;
  otp: any;
  public Attactments = [];

  public SendOTP() {
    debugger


    this.MediTestService.GetUserRegistration().subscribe(data => {
      let temp: any = data.filter(x => (x.emailAddress == this.email));
      if (temp.length != 0) {
        this.otp = Math.floor(100000 + Math.random() * 900000);
        this.showotp = 1;
        var entity1 = {
          'emailto': this.email,
          'emailsubject': 'OTP for Resetting your password',
          'emailbody': this.otp + ' is your verification code for HPM.',
          'attachmenturl': this.Attactments,
          'cclist': this.email,
          'bcclist': this.email,
        }
        var entity2 = {
          'EmailAddress': this.email,
          'OTP': this.otp
        }
        this.MediTestService.sendemailattachements(entity1).subscribe(res => {
          debugger;
          this.Attactments = [];
        })
        this.MediTestService.Updateotp(entity2).subscribe(res => {
          debugger;

        })
      }
      else {
        Swal.fire('This Email Address is Not Registered with HPM')
      }
    })



  }


  public VerifyOTP() {
    debugger
    var entity2 = {
      'EmailAddress': this.email,
      'OTP': this.Otp
    }
    this.MediTestService.Verifyotp(entity2).subscribe(res => {
      debugger;
      if (res == 1) {
        this.showotp = 2;
      }
      else {
        Swal.fire('OTP Mismatch');
      }
    })
  }
  public Save() {
    var entity2 = {
      'EmailAddress': this.email,
      'newpassword': this.newpassword
    }
    this.MediTestService.Updatepassword(entity2).subscribe(res => {
      debugger;
      Swal.fire('Password Changed Successfully');
      this.ngOnInit();
    })

  }

}
