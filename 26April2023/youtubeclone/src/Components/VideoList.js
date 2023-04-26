function VideoList(props) {
    var renderList = () => {
        var list = props.videos.map((video, i) => {
            return <li onClick={() => props.onVideoSelect(video)} key={i}><img src={video.snippet.thumbnails.default.url}></img><br></br></li>
        })
        return list;
    }
    return (
        <div>
            <h1>Video List</h1>

            <ul style={{ listStyleType: 'none' }}>
                {renderList()}
            </ul>

        </div>
    )

}
export default VideoList;