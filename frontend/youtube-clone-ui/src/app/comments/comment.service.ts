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
    return this.httpClient.post("http://localhost:8080/api/video/60e35fa795d9f56ee8599f3c/comment", commentDto,
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
      });
  }

  getComments(): Observable<Array<Comment>> {
    return this.httpClient.get<Comment[]>("http://localhost:8080/api/video/60e35fa795d9f56ee8599f3c/comment",
      {
        headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
      });
  }
}
