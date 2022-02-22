import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ProfileModule } from './pages/profile/profile.module';

const appRoutes: Routes = [
  { path: '', component: FeedsComponent },
  { path: 'feeds', component: FeedsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'chats', component: ChatsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ProfileModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
