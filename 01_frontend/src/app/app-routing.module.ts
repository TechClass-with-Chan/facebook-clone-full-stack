import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsModule } from './pages/chats/chats.module';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { ProfileModule } from './pages/profile/profile.module';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'feeds', pathMatch: 'full' },
  { path: 'feeds', component: FeedsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ProfileModule,
    ChatsModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
