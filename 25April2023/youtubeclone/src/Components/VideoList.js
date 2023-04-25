function VideoList(props) {
    var renderList = () => {
        var list = props.videos.map(video => {
            return <li><img src={video.snippet.thumbnails.default.url}></img>{video.snippet.title}</li>
        })
        return list;
    }
    return (
        <div>
            <h1>Video List</h1>

            <ul>
                {renderList()}
            </ul>

        </div>
    )

}
export default VideoList;