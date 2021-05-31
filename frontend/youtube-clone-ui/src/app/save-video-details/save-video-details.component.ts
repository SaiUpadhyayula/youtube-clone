import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {VideoService} from "../upload-video/video.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrls: ['./save-video-details.component.css']
})
export class SaveVideoDetailsComponent implements OnInit {

  saveVideoForm: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: string[] = [];
  showVideoUrl = false;

  constructor(private videoService: VideoService, private matSnackBar: MatSnackBar) {
    this.saveVideoForm = new FormGroup({
      title: this.title,
      description: this.description,
    })
  }

  ngOnInit(): void {
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

  // public dropped(files: NgxFileDropEntry[]) {
  //   this.files = files;
  //   for (const droppedFile of files) {
  //
  //     if (droppedFile.fileEntry.isFile) {
  //       this.fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
  //       this.fileUploaded = true;
  //     }
  //   }
  // }
  //
  //
  // uploadVideo() {
  //   if (this.fileEntry !== undefined) {
  //     // const uploadVideo: UploadVideoResponse = this.videoService.uploadVideo(this.fileEntry);
  //     this.router.navigateByUrl("/save-video-details/" + 1);
  //   }
  // }
  saveVideo() {
    this.showVideoUrl = true;
    this.matSnackBar.open("Video Metadata Updated Successfully", "OK");
  }
}
