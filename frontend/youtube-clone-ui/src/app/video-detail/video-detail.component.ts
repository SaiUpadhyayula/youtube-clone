import {Component, OnDestroy} from '@angular/core';
import {UserService} from "../user.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {VideoService} from "../upload-video/video.service";

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnDestroy {

  subscribeToUserObservable: Subscription = new Subscription;
  showSubscribeButton: boolean = true;
  showUnSubscribeButton: boolean = false;
  videoUrl!: string;
  videoUrlAvailable = false;
  videoId!: string | '';
  likeCount: number = 0;
  dislikeCount: number = 0;

  constructor(private route: ActivatedRoute, private userService: UserService,
              private videoService: VideoService) {
    this.videoId = this.route.snapshot.params.videoId;

    this.videoService.getVideo(this.videoId).subscribe(data => {
      this.videoUrl = data.url;
      this.videoUrlAvailable = true;
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  subscribeToUser() {
    this.subscribeToUserObservable = this.userService.subscribeToUser()
      .subscribe(() => {
        this.showSubscribeButton = false;
        this.showUnSubscribeButton = true;
      })
  }

  ngOnDestroy(): void {
    this.subscribeToUserObservable.unsubscribe();
  }

  likeVideo() {
    this.videoService.likeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  dislikeVideo() {
    this.videoService.dislikeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }
}
