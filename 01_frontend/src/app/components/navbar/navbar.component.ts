import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      highlighted: true,
    },
    {
      text: 'Photos',
      url: '/',
      highlighted: false,
    },
    {
      text: 'Video',
      url: '/',
      highlighted: false,
    },
    {
      text: 'Communities',
      url: '/',
      highlighted: false,
    },
    {
      text: 'Favourites',
      url: '/',
      highlighted: false,
    },
    {
      text: 'Recommendations',
      url: '/',
      highlighted: false,
    },
  ];

  constructor(private router: Router) {
    if (router.url !== '/') {
      this.navigations.forEach((nav) => {
        if (nav.url === router.url) {
          nav.highlighted = true;
        } else {
          nav.highlighted = false;
        }
      });
    }
  }

  ngOnInit(): void {}
}
