import { Component, Inject } from '@angular/core';
import { MediTestService } from '../app/medi-test.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public MediTestService: MediTestService, @Inject(DOCUMENT) private dom: Document) { }
  showsidebar: any;
  languageid: any;
  isMobileResolution: any;
  isDescktopResolution: any;
  temp: any;
  sidenav: any;
  showmobile: any;

  ngOnInit() {

    this.temp = 0;
    this.showsidebar = 0;
    this.languageid = localStorage.getItem('LanguageID');
    //this.temp = localStorage.getItem("temp");
    this.sidenav = 0;
    this.temp = localStorage.getItem("temp");

    //this.login = localStorage.getItem('login');
    this.dom.body.scrollTop = 0;
    this.dom.documentElement.scrollTop = 0;

    if (window.innerHeight <= 812 && window.innerWidth >= 1200) {
      this.showmobile = 0
    }
    else if (window.innerHeight <= 812 && window.innerWidth >= 300) {
      this.showmobile = 1
    }
  }

  onActivate(event: any) {
    window.scroll(0, 0);
  }
  labels: any
  public getlanguage() {
    this.MediTestService.GetAdmin_LoginPage_Labels(1).subscribe(
      data => {

        this.labels = data;
      }, error => {
      }
    )
  }

}


