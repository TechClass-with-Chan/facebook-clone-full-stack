import { Component, OnInit } from '@angular/core';
import { PhotoPost } from 'src/app/vo/photo-post';

@Component({
  selector: 'app-photos-in-a-year',
  templateUrl: './photos-in-a-year.component.html',
  styleUrls: ['./photos-in-a-year.component.css'],
})
export class PhotosInAYearComponent implements OnInit {
  photoPosts: Array<PhotoPost> = [
    {
      img: 'https://cdn.vox-cdn.com/thumbor/DI0UtdvSSzZz86PAsS0KMS97izM=/0x0:3926x3123/920x613/filters:focal(1649x1248:2277x1876):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70305223/1234657391.0.jpg',
      likes: 25000,
      comments: 2000,
      postTime: Date.now(),
      summary: 'Falcon 9 is ready to start this evening',
    },
    {
      img: 'https://www.reuters.com/resizer/uiVDEdw6icOXQMOFr2JYwB_hUtE=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HXXQE5EEPFL4HFPHTYMUHCCIOQ.jpg',
      likes: 25000,
      comments: 2000,
      postTime: Date.now(),
      summary: 'Falcon 9 is ready to start this evening',
    },
    {
      img: 'https://www.reuters.com/resizer/ATaB_zhvsHouhaIWrg8S9PCjFyU=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H7G6VBOP4RPX7JPNRY4VVV3LKQ.jpg',
      likes: 25000,
      comments: 2000,
      postTime: Date.now(),
      summary: 'Falcon 9 is ready to start this evening',
    },
    {
      img: 'https://th-thumbnailer.cdn-si-edu.com/Q2bD0VxRXKHPYf1WEx5PiWjFHxk=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/Ingenuity-Awards-Elon-Musk-631.jpg',
      likes: 25000,
      comments: 2000,
      postTime: Date.now(),
      summary: 'Falcon 9 is ready to start this evening',
    },
    {
      img: 'https://media.vanityfair.com/photos/5a7b182c9b38580e8603ca4f/master/w_2560%2Cc_limit/elon-musk-showman-rocket.jpg',
      likes: 25000,
      comments: 2000,
      postTime: Date.now(),
      summary: 'Falcon 9 is ready to start this evening',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
