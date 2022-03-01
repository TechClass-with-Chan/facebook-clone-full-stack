import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ProfileModule } from './pages/profile/profile.module';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'feeds', pathMatch: 'full' },
  { path: 'feeds', component: FeedsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes), ProfileModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
