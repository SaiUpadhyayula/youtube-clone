import {Component, OnDestroy} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CommentService} from "./comment.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Comment} from "./comment";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnDestroy {

  showCommentSection: boolean = false;

  commentsForm: FormGroup;
  comments: Array<Comment> = [];
  commentsSubscription: Subscription = new Subscription;
  postCommentSubscription: Subscription = new Subscription;

  constructor(private commentService: CommentService, private matSnackBar: MatSnackBar) {
    this.commentsForm = new FormGroup({
      comment: new FormControl('comment'),
    });
    this.commentsSubscription = this.getCommentsSubscription();
  }

  private getCommentsSubscription() {
    return this.commentService.getComments().subscribe(response => {
      this.comments = response;
    });
  }

  ngOnDestroy(): void {
    this.commentsSubscription.unsubscribe();
    this.postCommentSubscription.unsubscribe();
  }

  showCommentButton() {
    this.showCommentSection = true;
  }

  postComment() {
    const commentText: string = this.commentsForm.get('comment')?.value;
    const commentDto = {
      "commentText": commentText,
      "commentAuthor": "Sai",
      "likeCount": 0,
      "disLikeCount": 0
    }
    this.postCommentSubscription = this.commentService.postComment(commentDto)
      .subscribe(() => {
        this.matSnackBar.open("Comment Added Successfully", "OK");
        this.showCommentSection = false;

        this.commentsForm.get('comment')?.reset();
        this.commentsSubscription = this.getCommentsSubscription();
      });
  }
}
