import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/vo/feed';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.css'],
})
export class FeedCardComponent implements OnInit {
  @Input() feed!: Feed;
  @Input() showThumbUp: boolean = true;
  @Input() showComment: boolean = true;
  @Input() showShare: boolean = true;
  @Input() showStar: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
