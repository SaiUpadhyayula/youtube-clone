export interface VideoDto {
  videoId: string;
  userId: string;
  videoName: string;
  description: string;
  tags: Array<string>;
  videoStatus: string;
  url: string;
  thumbnailUrl: string;
  likeCount: number;
  dislikeCount: number;
}
