import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/vo/navbar-item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  navbarItems: Array<NavbarItem> = [
    {
      text: 'Chronicle',
      url: '/friends/profile/chronicle',
    },
    {
      text: 'Information',
      url: '/friends/profile/info',
    },
    {
      text: 'Photos',
      url: '/friends/profile/photos',
    },
    {
      text: 'More',
      url: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
