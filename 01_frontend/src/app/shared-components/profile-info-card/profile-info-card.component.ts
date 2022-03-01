import { Component, Input, OnInit } from '@angular/core';
import { ProfileInfoItem } from 'src/app/vo/profile-info-item';

@Component({
  selector: 'app-profile-info-card',
  templateUrl: './profile-info-card.component.html',
  styleUrls: ['./profile-info-card.component.css'],
})
export class ProfileInfoCardComponent implements OnInit {
  @Input() infoItem!: ProfileInfoItem;

  constructor() {}

  ngOnInit(): void {}
}
