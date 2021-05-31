import {Injectable} from '@angular/core';
import {FileSystemFileEntry} from "ngx-file-drop";
import {HttpClient} from "@angular/common/http";
import {UploadVideoResponse} from "./UploadVideoResponse";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  uploadVideoResponse: UploadVideoResponse | undefined;

  constructor(private httpClient: HttpClient) {
  }

  public uploadVideo(fileEntry: FileSystemFileEntry): any {
    fileEntry.file((file => {
      const fd = new FormData();
      fd.append("file", file, file.name);
      fd.append("userId", "");
      // this.httpClient.post<UploadVideoResponse>('http://localhost:8080/api/video/upload', fd,
      //   {
      //     headers: new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access_token'))
      //   }).subscribe(data => {
      //   this.uploadVideoResponse = data;
      // })
    }))
    return this.uploadVideoResponse;
  }

  public getVideoResponse(): UploadVideoResponse {
    return <UploadVideoResponse>this.uploadVideoResponse;
  }
}
