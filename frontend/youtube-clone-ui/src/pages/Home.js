import React from 'react';
import {fetchVideos} from "../actions";
import {connect} from "react-redux";
import Grid from "@material-ui/core/Grid";
import VideoCard from "../components/VideoCard";

class Home extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchVideos());
    }

    renderVideos(videos) {
        return videos.map((video) => {
            return (
                <Grid item xs={12} sm={4}>
                    <VideoCard video={video} key={video.videoId}/>
                </Grid>
            )
        })
    }

    render() {
        const {videos} = this.props;
        return (
            <div>
                <div>
                    <h1 className="h2">Featured Videos</h1>
                </div>
                <Grid container spacing={2}>
                    {this.renderVideos(videos)}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}
export default connect(mapStateToProps)(Home);
// import React from 'react';
// import VideoCard from "../components/VideoCard";
// import Grid from "@material-ui/core/Grid";
// import {makeStyles} from "@material-ui/core/styles";
//
// const useStyles = makeStyles({
//     gridContainer: {
//         paddingLeft: "20px",
//         paddingRight: "40px"
//
//     }
// })
//
// export default function Home() {
//
//     const classes = useStyles();
//     return (
//         <Grid container spacing={4} className={classes.gridContainer}>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//                 <VideoCard/>
//             </Grid>
//         </Grid>
//     )
// }
