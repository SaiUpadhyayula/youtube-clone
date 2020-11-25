import React from 'react';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {CardMedia} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = withStyles({
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

class VideoCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const classes = useStyles;
        return (
            <Link to={`/video/${this.props.video.videoId}`}>
                <Card variant="outlined">
                    <CardMedia style={{height: "150px"}} image={"http://via.placeholder.com/350x250"}/>
                    <CardContent>
                        <p className={classes.title}><strong><Link
                            to={`/video/${this.props.video.videoId}`}>{this.props.video.videoName}</Link></strong>
                        </p>
                        <p className="card-text"><img width="28" height="28"
                                                      src="https://res.cloudinary.com/douy56nkf/image/upload/v1594060920/defaults/txxeacnh3vanuhsemfc8.png"/>
                            Programming Techie</p>
                    </CardContent>
                    <CardActions>
                        <p>10 views</p>
                        <small className="text-muted">9 mins</small>
                    </CardActions>
                </Card>
            </Link>
        )
    }
}

export default VideoCard;


// export default function VideoCard() {
//     const classes = useStyles();
//
//     return (
//         <Link to={`/video/${this.props.video.videoId}`}>
//             <Card className={classes.root} variant="outlined">
//                 <img className="card-img-top" src="http://via.placeholder.com/350x250" alt="Card image cap"/>
//                 <CardContent>
//                     <p className="card-title"><strong><Link
//                         to={`/video/${this.props.video.videoId}`}>{this.props.video.videoName}</Link></strong></p>
//                     <p className="card-text"><img width="28" height="28"
//                                                   src="https://res.cloudinary.com/douy56nkf/image/upload/v1594060920/defaults/txxeacnh3vanuhsemfc8.png"/>
//                         {this.props.video.videoOwner}</p>
//                 </CardContent>
//                 <CardActions>
//                     <p>10 views</p>
//                     <small className="text-muted">9 mins</small>
//                 </CardActions>
//             </Card>
//         </Link>
//     );
// }
