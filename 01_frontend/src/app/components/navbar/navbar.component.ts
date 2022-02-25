import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/vo/navbar-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() navbarItems!: Array<NavbarItem>;

  constructor() {}

  ngOnInit(): void {}
}
