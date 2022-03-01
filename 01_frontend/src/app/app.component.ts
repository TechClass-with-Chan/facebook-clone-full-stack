import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'facebook-clone';
  test = false;

  constructor(private location: Location) {
    if (this.location.path() === '/test') {
      this.test = true;
    }
  }
}
