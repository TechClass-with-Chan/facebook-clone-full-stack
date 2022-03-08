import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import {
  HeroAcademicCap,
  HeroAdjustments,
  HeroAnnotation,
  HeroBadgeCheck,
  HeroBell,
  HeroBookOpen,
  HeroBriefcase,
  HeroCake,
  HeroCalendar,
  HeroCamera,
  HeroCheck,
  HeroChevronDown,
  HeroCog,
  HeroCollection,
  HeroCube,
  HeroDotsHorizontal,
  HeroDotsVertical,
  HeroEmojiHappy,
  HeroFastForward,
  HeroLocationMarker,
  HeroMicrophone,
  HeroNewspaper,
  HeroPaperClip,
  HeroPause,
  HeroPhotograph,
  HeroPlay,
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
import { AboutFriendsSongsComponent } from './about-friends-songs/about-friends-songs.component';
import { ChatContactComponent } from './chat-contact/chat-contact.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FavoriteSongComponent } from './favorite-song/favorite-song.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FriendCardComponent } from './friend-card/friend-card.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoPostDialogComponent } from './photo-post-dialog/photo-post-dialog.component';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { PhotosInAYearComponent } from './photos-in-a-year/photos-in-a-year.component';
import { ProfileInfoCardComponent } from './profile-info-card/profile-info-card.component';
import { RelationshipCountComponent } from './relationship-count/relationship-count.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FriendRequestComponent } from './story-event-request/friend-request/friend-request.component';
import { StoryEventRequestComponent } from './story-event-request/story-event-request.component';
import { MusicListComponent } from './music-list/music-list.component';

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
    PhotoPostDialogComponent,
    CommentItemComponent,
    MusicListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
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
    PhotoPostDialogComponent,
    CommentItemComponent,
    MusicListComponent,
    NgIconsModule,
  ],
})
export class SharedComponentsModule {}
