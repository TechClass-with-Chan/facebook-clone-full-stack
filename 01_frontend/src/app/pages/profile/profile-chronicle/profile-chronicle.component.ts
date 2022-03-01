import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/vo/feed';

@Component({
  selector: 'app-profile-chronicle',
  templateUrl: './profile-chronicle.component.html',
  styleUrls: ['./profile-chronicle.component.css'],
})
export class ProfileChronicleComponent implements OnInit {
  publications: Array<Feed> = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
      username: 'Elon Musk',
      verified: true,
      postTime: Date.now(),
      post: 'Our Falcon’ 1st step successfully returned from its’ 9th mission.\nGonna try it out next week one more time. Why not?',
      pictures: [
        'https://techcrunch.com/wp-content/uploads/2020/12/STR_10.jpg?w=1390&crop=1',
        'https://1734811051.rsc.cdn77.org/data/images/full/375838/spacex-falcon-9-rocket-and-crew-dragon-capsule-launches-from-cape-canaveral-sending-astronauts-to-the-international-space-station.jpg',
        'https://content.fortune.com/wp-content/uploads/2016/09/478872958.jpg?resize=750,500',
      ],
      thumbUps: 25000,
      comments: 2000,
      shares: 542,
      stared: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
