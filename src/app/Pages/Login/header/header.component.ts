import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  public clear() {
    sessionStorage.clear();
    localStorage.clear();
    // location.href = "#/login";
    this.router.navigate(["/login"])
      .then(() => {
        window.location.reload();
      });

  }


}
