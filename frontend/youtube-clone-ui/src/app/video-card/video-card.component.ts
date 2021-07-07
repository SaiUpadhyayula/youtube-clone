import {Component, Input} from '@angular/core';
import {VideoDto} from "../VideoDto";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent {

  @Input()
  video!: VideoDto;

}
