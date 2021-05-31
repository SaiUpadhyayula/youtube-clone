import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  showCommentSection: Boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  showCommentButton() {
    this.showCommentSection = true;
  }

  hideCommentButton() {
    this.showCommentSection = false;
  }
}
