import { Component, OnInit } from '@angular/core';
import { Friend } from 'src/app/vo/friend';
import { NavbarItem } from 'src/app/vo/navbar-item';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  navbarItems: Array<NavbarItem> = [
    {
      text: 'All friends',
      url: '/friends',
    },
    {
      text: 'Work',
      url: '',
    },
    {
      text: 'Highschool',
      url: '',
    },
    {
      text: 'Howmetown',
      url: '',
    },
    {
      text: 'Following',
      url: '',
    },
    {
      text: 'Recommendations',
      url: '',
    },
  ];

  friends: Array<Friend> = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
      username: 'Elon Musk',
      verified: true,
      company: 'SpaceX',
      location: '',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
      username: 'Elon Musk',
      verified: true,
      company: 'SpaceX',
      location: '',
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
      username: 'Elon Musk',
      verified: true,
      company: 'SpaceX',
      location: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
