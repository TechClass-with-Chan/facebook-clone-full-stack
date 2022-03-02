import { Component, OnInit } from '@angular/core';
import { ChatContact } from 'src/app/vo/chat-contact';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css'],
})
export class ChatsComponent implements OnInit {
  contacts: Array<ChatContact> = [
    {
      link: '/chats/elonmusk',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
      username: 'Elon Musk',
      verified: true,
      latestMessage: 'Hey! What you think bout our Starship presentation?',
      latestMessageTime: Date.now(),
      unreadMessages: 8,
    },
    {
      link: '/chats/hello',
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
      username: 'Elon Musk',
      verified: true,
      latestMessage: 'Hey! What you think bout our Starship presentation?',
      latestMessageTime: Date.now(),
      unreadMessages: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
