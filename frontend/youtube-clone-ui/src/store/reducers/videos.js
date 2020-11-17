const videos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS':
            return action.videos;
        default:
            return state;
    }
}

export default videos;
