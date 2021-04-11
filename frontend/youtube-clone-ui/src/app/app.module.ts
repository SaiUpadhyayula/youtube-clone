import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {VideoDetailComponent} from './video-detail/video-detail.component';
import {CommentsComponent} from './comments/comments.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {SuggestionBarComponent} from './suggestion-bar/suggestion-bar.component';
import {TrendingComponent} from './trending/trending.component';
import {AuthComponent} from './auth/auth.component';
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';
import {LikedVideosComponent} from './liked-videos/liked-videos.component';
import {HistoryComponent} from './history/history.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FeaturedComponent} from './featured/featured.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { VideoCardComponent } from './video-card/video-card.component';
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";

import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    VideoPlayerComponent,
    VideoDetailComponent,
    CommentsComponent,
    SidebarComponent,
    SuggestionBarComponent,
    TrendingComponent,
    AuthComponent,
    SubscriptionsComponent,
    LikedVideosComponent,
    HistoryComponent,
    FeaturedComponent,
    VideoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatCardModule,
    FlexModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
