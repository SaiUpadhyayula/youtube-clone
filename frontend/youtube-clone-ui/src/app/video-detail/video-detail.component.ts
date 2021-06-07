import {Component, OnDestroy} from '@angular/core';
import {UserService} from "../user.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnDestroy {

  subscribeToUserObservable: Subscription = new Subscription;
  showSubscribeButton: boolean = true;
  showUnSubscribeButton: boolean = false;

  constructor(private userService: UserService) {
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
}
