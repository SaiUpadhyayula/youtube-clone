import {Component} from '@angular/core';
import {FileSystemFileEntry, NgxFileDropEntry} from "ngx-file-drop";
import {VideoService} from "./video.service";
import {UploadVideoResponse} from "./UploadVideoResponse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {

  public files: NgxFileDropEntry[] = [];
  fileUploaded: boolean = false;
  fileEntry: FileSystemFileEntry | undefined;

  constructor(private videoService: VideoService, private router: Router) {
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      if (droppedFile.fileEntry.isFile) {
        this.fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        this.fileUploaded = true;
      }
    }
  }


  uploadVideo() {
    if (this.fileEntry !== undefined) {
      // const uploadVideo: UploadVideoResponse = this.videoService.uploadVideo(this.fileEntry);
      this.router.navigateByUrl("/save-video-details/" + 1);
    }
  }
}
