import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  routeMe(value) {
    console.log(value);
    // this.router.navigate([value]);
  }
  setPreference(preference){
    console.log(preference);
  }
}
