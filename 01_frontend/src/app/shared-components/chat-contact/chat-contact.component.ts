import { Component, Input, OnInit } from '@angular/core';
import { ChatContact } from 'src/app/vo/chat-contact';

@Component({
  selector: 'app-chat-contact',
  templateUrl: './chat-contact.component.html',
  styleUrls: ['./chat-contact.component.css'],
})
export class ChatContactComponent implements OnInit {
  @Input() contact!: ChatContact;

  constructor() {}

  ngOnInit(): void {}
}
