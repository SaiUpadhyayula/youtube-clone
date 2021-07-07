import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {VideoService} from "../upload-video/video.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Subscription} from "rxjs";
import {VideoDto} from "../VideoDto";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrls: ['./save-video-details.component.css']
})
export class SaveVideoDetailsComponent {

  saveVideoForm: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  videoStatus: FormControl = new FormControl('')
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = [];
  showVideoUrl = false;
  videoUrlAvailable = false;
  videoUrl!: string;
  thumbnailUrl!: string;
  videoId!: string;
  selectedFile!: File;
  selectedFileName = '';
  uploadThumbnailSubscription!: Subscription;
  fileUploaded!: boolean;
  thumbnailUploaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private videoService: VideoService, private matSnackBar: MatSnackBar,
              private route: ActivatedRoute, private authService: AuthService) {
    this.videoId = this.route.snapshot.params.videoId;
    this.videoService.getVideo(this.videoId).subscribe(data => {
      this.videoUrl = data.url;
      this.thumbnailUrl = data.thumbnailUrl;
      this.videoUrlAvailable = true;
    })
    this.saveVideoForm = new FormGroup({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus,
    })
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.tags.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: string): void {
    const index = this.tags.indexOf(fruit);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
  }

  onUpload() {
    this.uploadThumbnailSubscription = this.videoService.uploadThumbnail(this.selectedFile, this.videoId)
      .subscribe(data => {
        this.thumbnailUploaded.subscribe(() => {
          this.matSnackBar.open("Thumbnail Uploaded Successfully", "OK");
          this.fileUploaded = true;
        });
      });
  }

  saveVideo() {
    const userId = this.authService.getUserId();
    const videoMetData: VideoDto = {
      "videoId": this.videoId,
      "userId": userId !== null ? userId : 'Test', //FIXME: check why userId is blank
      "videoName": this.saveVideoForm.get('title')?.value,
      "description": this.saveVideoForm.get('description')?.value,
      "tags": this.tags,
      "videoStatus": this.saveVideoForm.get('videoStatus')?.value,
      "url": this.videoUrl,
      "thumbnailUrl": this.thumbnailUrl,
      "likeCount": 0,
      "dislikeCount": 0
    }
    this.videoService.saveVideo(videoMetData).subscribe(data => {
      this.showVideoUrl = true;
      this.matSnackBar.open("Video Metadata Updated Successfully", "OK");
    });
  }
}
