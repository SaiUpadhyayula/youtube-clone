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
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpiMnZhOTNvMmZ4cWxqd1ZmdVctWiJ9.eyJpc3MiOiJodHRwczovL3F1b3RlbWFjaGluZS5ldS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTc1MzAzMTY2NjI0OTIxODcyOTciLCJhdWQiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaHR0cHM6Ly9xdW90ZW1hY2hpbmUuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwNTgyMDkyMCwiZXhwIjoxNjA1ODI4MTIwLCJhenAiOiJtQ3M2SmlWSnpPYjIyMnlUSUhFYndjZGlmV0dCYVpDRSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.gpJcyRwb2VZF2ynpjVHIQyqgZDvwokGsjFjONXC6mo5f649l-Jq6N8gQLNuj8zehDYNm6KkCC8PCrd1bRmQqBcjeE1HgyVQ58tOhYuZk5VKc1J_-shjDkun0ADlV60J1No44rPs-5Axw5-IITwfBm3Ir0lxfxAHhviDkweEboLndB1SD89xtbBeYI6kaX571NRdECR6iYHxMJNIOPd2CKgWLDklDe7J9bN4ryHh5wcQgQ9XUVSu7PkKyGVkv3wZnAn7PmW4b862TuKkFHTU0i_EmRU3iAoPJBV4zGsAMOFracWSmFuIIqyobKALNUuWO5uS2UM-bwuk-FYFegIySKQ"
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
            "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImpiMnZhOTNvMmZ4cWxqd1ZmdVctWiJ9.eyJpc3MiOiJodHRwczovL3F1b3RlbWFjaGluZS5ldS5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMTc1MzAzMTY2NjI0OTIxODcyOTciLCJhdWQiOlsiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaHR0cHM6Ly9xdW90ZW1hY2hpbmUuZXUuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTYwNTgyMDkyMCwiZXhwIjoxNjA1ODI4MTIwLCJhenAiOiJtQ3M2SmlWSnpPYjIyMnlUSUhFYndjZGlmV0dCYVpDRSIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.gpJcyRwb2VZF2ynpjVHIQyqgZDvwokGsjFjONXC6mo5f649l-Jq6N8gQLNuj8zehDYNm6KkCC8PCrd1bRmQqBcjeE1HgyVQ58tOhYuZk5VKc1J_-shjDkun0ADlV60J1No44rPs-5Axw5-IITwfBm3Ir0lxfxAHhviDkweEboLndB1SD89xtbBeYI6kaX571NRdECR6iYHxMJNIOPd2CKgWLDklDe7J9bN4ryHh5wcQgQ9XUVSu7PkKyGVkv3wZnAn7PmW4b862TuKkFHTU0i_EmRU3iAoPJBV4zGsAMOFracWSmFuIIqyobKALNUuWO5uS2UM-bwuk-FYFegIySKQ"
        }
    })
        .then(res => res.data)
}
