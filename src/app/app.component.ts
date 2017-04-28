import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    "[class.intro]":"intro"
  }
})
export class AppComponent {
  constructor() {
  }

  intro: boolean = true;
}