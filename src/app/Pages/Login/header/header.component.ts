import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public clear() {
    sessionStorage.clear();
    localStorage.clear();
    location.href = "#/login";
    location.reload();

  }


}
