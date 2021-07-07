import {Component, OnDestroy} from '@angular/core';
import {VideoService} from "../upload-video/video.service";
import {VideoDto} from "../VideoDto";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnDestroy {

  videos: Array<VideoDto> = [];
  getAllVideosSubscription: Subscription;

  constructor(private videoService: VideoService) {
    this.getAllVideosSubscription = videoService.getAllVideos().subscribe(data => {
      this.videos = data;
    });
  }

  ngOnDestroy(): void {
    this.getAllVideosSubscription.unsubscribe();
  }
}
