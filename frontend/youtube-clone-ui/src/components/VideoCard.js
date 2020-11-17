import React from 'react';
import {Link} from "react-router-dom";

class VideoCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={`/video/${this.props.video.videoId}`}>
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top" src="http://via.placeholder.com/350x250"
                         alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-title"><strong><Link
                            to={`/video/${this.props.video.videoId}`}>{this.props.video.videoName}</Link></strong></p>
                        <p className="card-text"><img width="28" height="28"
                                                      src="https://res.cloudinary.com/douy56nkf/image/upload/v1594060920/defaults/txxeacnh3vanuhsemfc8.png"/>
                            {this.props.video.videoOwner}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p>10 views</p>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default VideoCard;
