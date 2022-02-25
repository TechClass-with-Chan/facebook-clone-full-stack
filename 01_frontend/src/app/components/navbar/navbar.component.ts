import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navigations = [
    {
      text: 'Posts',
      url: '/feeds',
    },
    {
      text: 'Photos',
      url: '',
    },
    {
      text: 'Video',
      url: '',
    },
    {
      text: 'Communities',
      url: '',
    },
    {
      text: 'Favourites',
      url: '',
    },
    {
      text: 'Recommendations',
      url: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
