import { Component, HostListener, OnInit } from '@angular/core';
import { PhotoPost } from '../vo/photo-post';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  photoPost: PhotoPost = {
    img: 'https://cdn.vox-cdn.com/thumbor/DI0UtdvSSzZz86PAsS0KMS97izM=/0x0:3926x3123/920x613/filters:focal(1649x1248:2277x1876):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70305223/1234657391.0.jpg',
    likes: 25000,
    comments: 2000,
    postTime: Date.now(),
    summary: 'Falcon 9 is ready to start this evening',
  };

  innerWidth: any;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.innerWidth = window.innerWidth;
  }
}
