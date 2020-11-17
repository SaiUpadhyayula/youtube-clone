import axios from "axios";

export const fetchVideos = () => (dispatch) => {
    axios.get("http://localhost:8080/api/video/")
        .then(response => {
            const videos = response.data;
            dispatch({
                type: 'FETCH_VIDEOS',
                videos
            });
        });
}

export const fetchVideoById = videoId => dispatch => {
    dispatch({type: 'IS_FETCHING_VIDEO'});

    axios.get(`http://localhost:8080/api/video/${videoId}`)
        .then(response => {
            const video = response.data;
            dispatch({
                type: 'FETCH_VIDEO_BY_ID',
                video
            });
        });
}

export const initVideo = file => {
    return axios.post('http://localhost:8080/videos', {}, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer "
        }
    })
        .then(res => res.data)
}
export const uploadVideo = (file, url) => {

    const formData = new FormData();
    formData.append('file', file);

    return axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": "Bearer "
        }
    })
        .then(res => res.data)
}
