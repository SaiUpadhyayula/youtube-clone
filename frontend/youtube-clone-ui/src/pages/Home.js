import React from 'react';
import VideoCard from "../components/VideoCard";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            videos: [
                {
                    "videoId": "5f9f287089124072680d9e3e",
                    "channelId": "5f9da3b9b25f2e0bccd37141",
                    "videoName": "Spring Boot Testing Tutorial Part 3",
                    "description": "In this tutorial, we are going to learn how to Testing REST APIs using Spring Framework",
                    "tags": [
                        "spring",
                        "spring boot",
                        "spring boot testing",
                        "rest api testing",
                        "mock mvc"
                    ],
                    "videoOwner": "Programming Techie",
                    "videoStatus": "PUBLIC",
                    "fileName": "Spring Boot Testing Part 3.mp4",
                    "likeCount": 1,
                    "dislikeCount": 0
                },
                {
                    "videoId": "5fa055de28f2834935162637",
                    "channelId": "5f9da3b9b25f2e0bccd37141",
                    "videoName": "Subscribe Video",
                    "description": "Subscribe Video",
                    "tags": [
                        "subscribe"
                    ],
                    "videoStatus": "PUBLIC",
                    "fileName": "subscribe animation.mp4",
                    "videoOwner": "Programming Techie",
                    "likeCount": 0,
                    "dislikeCount": 0
                },
                {
                    "videoId": "5fa1cb5701ec8e7da2dbd6af",
                    "channelId": "5fa1ca7701ec8e7da2dbd6ae",
                    "videoName": "Subscribe Video",
                    "description": "Subscribe Video",
                    "tags": [
                        "spring"
                    ],
                    "videoOwner": "Programming Techie",
                    "videoStatus": "PUBLIC",
                    "fileName": "subscribe animation.mp4",
                    "likeCount": 0,
                    "dislikeCount": 0
                }
            ]
        }
    }

    renderVideos(videos) {
        return videos.map((video) => {
            return (
                <div key={video.videoId} className="col-md-3">
                    <VideoCard videoOwner={video.videoOwner} videoName={video.videoName}/>
                </div>
            )
        })
    }

    render() {
        const {videos} = this.state;
        return (
            <div className="card-list">
                <div className="container">
                    <h2 className="page-title">Recommended</h2>
                    <div className="row">
                        {this.renderVideos(videos)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
