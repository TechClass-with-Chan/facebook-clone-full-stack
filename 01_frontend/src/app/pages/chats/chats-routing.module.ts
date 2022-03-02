import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats.component';
import { MessagesComponent } from './messages/messages.component';

const chatsRoutes: Routes = [
  {
    path: 'chats',
    component: ChatsComponent,
    children: [{ path: ':userid', component: MessagesComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(chatsRoutes)],
  exports: [RouterModule],
})
export class ChatsRoutingModule {}
