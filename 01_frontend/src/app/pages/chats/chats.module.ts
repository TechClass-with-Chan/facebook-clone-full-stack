import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsComponent } from './chats.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { MessagesComponent } from './messages/messages.component';
import { ChatsRoutingModule } from './chats-routing.module';

@NgModule({
  declarations: [ChatsComponent, MessagesComponent],
  imports: [CommonModule, ChatsRoutingModule, SharedComponentsModule],
})
export class ChatsModule {}
