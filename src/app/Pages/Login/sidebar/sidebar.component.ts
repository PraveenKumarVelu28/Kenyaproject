import { Component, OnInit } from '@angular/core';
import { MediTestService } from '../../../medi-test.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public MediTestService: MediTestService) { }
  display: any;
  roleid: any;
  languageid: any;
  ngOnInit(): void {

   // this.display = "none";
    this.roleid = localStorage.getItem('roleid');
    this.languageid = localStorage.getItem('LanguageID')
  }

  labels: any
  public getlanguage() {
    this.MediTestService.GetAdmin_LoginPage_Labels(this.languageid).subscribe(
      data => {

        this.labels = data;
      }, error => {
      }
    )
  }


  public hide() {
    this.display = "none";
  }

  public highlight(evt: any) {
    var i, tablinks;

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }

}
