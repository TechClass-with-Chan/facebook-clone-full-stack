import {
  APP_INITIALIZER,
  enableProdMode,
  ErrorHandler,
  NgModule,
} from '@angular/core';
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
  HeroDotsVertical,
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
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FeedCardComponent } from './components/feed-card/feed-card.component';
import { StoryEventRequestComponent } from './components/story-event-request/story-event-request.component';
import { FriendRequestComponent } from './components/story-event-request/friend-request/friend-request.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { providePerformance, getPerformance } from '@angular/fire/performance';
import { provideStorage, getStorage } from '@angular/fire/storage';
import * as Sentry from '@sentry/angular';
import { BrowserTracing } from '@sentry/tracing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

Sentry.init({
  dsn: 'https://4e98ff16e7a5479881d274c36b45cf75@o1141172.ingest.sentry.io/6231285',
  integrations: [
    new BrowserTracing({
      tracingOrigins: ['https://facebook-clone-full-stack.web.app'],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

@NgModule({
  declarations: [
    AppComponent,
    SidemenuComponent,
    MusicPlayerComponent,
    FeedsComponent,
    FriendsComponent,
    ChatsComponent,
    SidemenuItemComponent,
    NavbarComponent,
    CreatePostComponent,
    FeedCardComponent,
    StoryEventRequestComponent,
    FriendRequestComponent,
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
      HeroDotsVertical,
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideStorage(() => getStorage()),
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((success) => console.log(`Bootstrap success`))
  .catch((err) => console.log(err));
