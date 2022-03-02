import { Component, Input, OnInit } from '@angular/core';
import { PhotoPost } from 'src/app/vo/photo-post';

@Component({
  selector: 'app-photo-post',
  templateUrl: './photo-post.component.html',
  styleUrls: ['./photo-post.component.css'],
})
export class PhotoPostComponent implements OnInit {
  @Input() photoPost!: PhotoPost;

  constructor() {}

  ngOnInit(): void {}
}
