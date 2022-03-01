import { Component, OnInit } from '@angular/core';
import { ProfileInfoItem } from 'src/app/vo/profile-info-item';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
})
export class ProfileInfoComponent implements OnInit {
  infoItems: Array<ProfileInfoItem> = [
    {
      icon: 'hero-cake',
      img: '',
      item: '47 years',
      info: 'June 28, 1971',
      detailImg: '',
      detailText: '',
    },
    {
      icon: 'hero-location-marker',
      img: '',
      item: 'Lives in',
      info: 'Chalon Rd, Los Angeles, CA',
      detailImg: '',
      detailText: '',
    },
    {
      icon: 'hero-briefcase',
      img: '',
      item: 'CEO',
      info: 'SpaceX',
      detailImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1920px-SpaceX-Logo.svg.png',
      detailText:
        'SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.',
    },
    {
      icon: 'hero-user',
      img: '',
      item: 'Relationships',
      info: 'Single',
      detailImg: '',
      detailText: '',
    },
    {
      icon: 'hero-share',
      img: '',
      item: 'Instagram',
      info: 'elonmusk',
      detailImg: '',
      detailText: '',
    },
    {
      icon: 'hero-academic-cap',
      img: '',
      item: 'Bachelor of Science in Physics',
      info: 'University of Pennsylvania',
      detailImg: '',
      detailText: '',
    },
    {
      icon: '',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/KIMBAL_MUSK_OFFICIAL_HEADSHOT.jpg/800px-KIMBAL_MUSK_OFFICIAL_HEADSHOT.jpg',
      item: 'Kimbal Musk',
      info: 'Brother',
      detailImg: '',
      detailText: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
