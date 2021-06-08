import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "./comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  postComment(commentDto: any): Observable<any> {
    return this.httpClient.post("http://localhost:8081/api/video/606a0dbbf8986070a0d5b721/comment", commentDto,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
      });
  }

  getComments(): Observable<Array<Comment>> {
    return this.httpClient.get<Comment[]>("http://localhost:8081/api/video/606a0dbbf8986070a0d5b721/comment",
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
      });
  }
}
