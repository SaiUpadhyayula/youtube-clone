import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { SuggestedVideosComponent } from './suggested-videos/suggested-videos.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { AuthComponent } from './auth/auth.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatLineModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import { HomeComponent } from './home/home.component';
import {MatGridList, MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    UploadVideoComponent,
    VideoDetailComponent,
    CommentsComponent,
    SuggestedVideosComponent,
    SearchbarComponent,
    SearchResultsComponent,
    AuthComponent,
    VideoPlayerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatLineModule,
    MatListModule,
    MatSidenavModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
