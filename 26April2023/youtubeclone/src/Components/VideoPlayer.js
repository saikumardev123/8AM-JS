function VideoPlayer(props) {
    if (props.video) {
        let videoId = props.video.id.videoId;
        let src = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div>
                <iframe width="560" height="315" src={src} title="YouTube video player"></iframe>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

}
export default VideoPlayer;