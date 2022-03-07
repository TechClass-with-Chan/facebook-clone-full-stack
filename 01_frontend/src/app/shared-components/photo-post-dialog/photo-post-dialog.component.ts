import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/vo/feed';

@Component({
  selector: 'app-photo-post-dialog',
  templateUrl: './photo-post-dialog.component.html',
  styleUrls: ['./photo-post-dialog.component.css'],
})
export class PhotoPostDialogComponent implements OnInit {
  feed: Feed = {
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
    username: 'Elon Musk',
    verified: true,
    postTime: Date.now(),
    post: 'Our Falcon’ 1st step successfully returned from its’ 9th mission.\nGonna try it out next week one more time. Why not?',
    thumbUps: 25000,
    comments: 2000,
    shares: 542,
    stared: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
