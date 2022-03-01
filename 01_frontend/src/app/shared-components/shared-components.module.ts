import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FriendCardComponent } from './friend-card/friend-card.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { StoryEventRequestComponent } from './story-event-request/story-event-request.component';
import { NgIconsModule } from '@ng-icons/core';
import {
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
  HeroDotsVertical,
} from '@ng-icons/heroicons';
import { FriendRequestComponent } from './story-event-request/friend-request/friend-request.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreatePostComponent,
    FeedCardComponent,
    FriendCardComponent,
    MusicPlayerComponent,
    NavbarComponent,
    SidemenuComponent,
    SidemenuItemComponent,
    StoryEventRequestComponent,
    FriendRequestComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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
      HeroDotsVertical,
    }),
  ],
  exports: [
    CreatePostComponent,
    FeedCardComponent,
    FriendCardComponent,
    MusicPlayerComponent,
    NavbarComponent,
    SidemenuComponent,
    SidemenuItemComponent,
    StoryEventRequestComponent,
    FriendRequestComponent,
  ],
})
export class SharedComponentsModule {}
