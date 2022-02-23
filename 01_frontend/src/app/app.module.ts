import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { FeedsComponent } from './pages/feeds/feeds.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { AppRoutingModule } from './app-routing.module';
import { NgIconsModule } from '@ng-icons/core';
import {
  HeroAdjustments,
  HeroAnnotation,
  HeroBadgeCheck,
  HeroBookOpen,
  HeroBriefcase,
  HeroCake,
  HeroCalendar,
  HeroCamera,
  HeroCheck,
  HeroCog,
  HeroCollection,
  HeroCube,
  HeroDotsHorizontal,
  HeroEmojiHappy,
  HeroFastForward,
  HeroLocationMarker,
  HeroMicrophone,
  HeroNewspaper,
  HeroPaperClip,
  HeroPause,
  HeroPhotograph,
  HeroPlus,
  HeroRewind,
  HeroSearch,
  HeroShare,
  HeroStar,
  HeroThumbUp,
  HeroUser,
  HeroUsers,
  HeroVideoCamera,
  HeroVolumeUp,
} from '@ng-icons/heroicons';
import { SidemenuItemComponent } from './components/sidemenu-item/sidemenu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    MusicPlayerComponent,
    FeedsComponent,
    FriendsComponent,
    ChatsComponent,
    SidemenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      HeroNewspaper,
      HeroDotsHorizontal,
      HeroAnnotation,
      HeroUser,
      HeroUsers,
      HeroPhotograph,
      HeroAdjustments,
      HeroBadgeCheck,
      HeroBriefcase,
      HeroCake,
      HeroCalendar,
      HeroCamera,
      HeroCheck,
      HeroCog,
      HeroCollection,
      HeroCube,
      HeroEmojiHappy,
      HeroFastForward,
      HeroLocationMarker,
      HeroMicrophone,
      HeroPaperClip,
      HeroPause,
      HeroPlus,
      HeroRewind,
      HeroSearch,
      HeroShare,
      HeroStar,
      HeroThumbUp,
      HeroVideoCamera,
      HeroVolumeUp,
      HeroBookOpen,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
