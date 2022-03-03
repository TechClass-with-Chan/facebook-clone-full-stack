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
  HeroPlay,
  HeroChevronDown,
  HeroAcademicCap,
  HeroBell,
} from '@ng-icons/heroicons';
import { FriendRequestComponent } from './story-event-request/friend-request/friend-request.component';
import { RouterModule } from '@angular/router';
import { RelationshipCountComponent } from './relationship-count/relationship-count.component';
import { AboutFriendsSongsComponent } from './about-friends-songs/about-friends-songs.component';
import { FavoriteSongComponent } from './favorite-song/favorite-song.component';
import { ProfileInfoCardComponent } from './profile-info-card/profile-info-card.component';
import { PhotosInAYearComponent } from './photos-in-a-year/photos-in-a-year.component';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { ChatContactComponent } from './chat-contact/chat-contact.component';

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
    RelationshipCountComponent,
    AboutFriendsSongsComponent,
    FavoriteSongComponent,
    ProfileInfoCardComponent,
    PhotosInAYearComponent,
    PhotoPostComponent,
    ChatContactComponent,
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
      HeroPlay,
      HeroChevronDown,
      HeroAcademicCap,
      HeroBell,
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
    RelationshipCountComponent,
    AboutFriendsSongsComponent,
    FavoriteSongComponent,
    ProfileInfoCardComponent,
    PhotosInAYearComponent,
    PhotoPostComponent,
    ChatContactComponent,
    NgIconsModule,
  ],
})
export class SharedComponentsModule {}
