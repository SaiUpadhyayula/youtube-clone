import React from 'react';
import {Link} from "react-router-dom";

class VideoCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card ytc-card">
                <img className="card-img-top" src="http://via.placeholder.com/350x250"
                     alt="Card image cap"/>
                <div className="card-body">
                    <h6 className="card-subtitle mb-0 text-muted">{this.props.videoOwner}</h6>
                    <h5 className="card-title big-font">
                        <Link to="/video">{this.props.videoName}</Link>
                    </h5>
                    <p className="card-text">10 views &#183; 1 Month ago</p>
                </div>
            </div>
        )
    }
}

export default VideoCard;
