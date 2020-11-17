import React from 'react';
import {BigPlayButton, Player} from 'video-react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchVideoById} from "../actions";
import {SuggestionBar} from "../components/SuggestionBar";

class Video extends React.Component {

    componentDidMount() {
        const videoId = this.props.match.params.videoId;
        this.props.dispatch(fetchVideoById(videoId));
    }

    render() {
        const videoUrl = `http://localhost:8080/videos/${this.props.video.videoId}`;
        if (this.props.isFetching) {
            return null;
        }
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="row">
                    <div className="col-md-11">
                        <div>
                            <Player src={videoUrl}>
                                <BigPlayButton position="center"/>
                            </Player>
                        </div>
                        <div>
                            <h2><strong>{this.props.video.videoName}</strong></h2>
                        </div>
                        <hr/>
                        <div>
                            <h5><strong>{this.props.video.videoOwner}</strong></h5>
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger">Subscribe</button>
                        </div>
                        <div>
                            <p>10 views</p>
                        </div>
                        <hr/>
                        <div>
                            <p>{this.props.video.description}</p>
                        </div>
                        <hr/>
                        <div>
                            This is comments section
                        </div>
                    </div>
                    <div className="col-md-1">
                        <SuggestionBar/>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = ({video}) => ({video: video.item, isFetching: video.isFetching})

const VideoWithRouter = withRouter(Video);
export default connect(mapStateToProps)(VideoWithRouter);
