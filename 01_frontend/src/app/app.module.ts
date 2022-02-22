import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    MusicPlayerComponent,
    FeedsComponent,
    FriendsComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
