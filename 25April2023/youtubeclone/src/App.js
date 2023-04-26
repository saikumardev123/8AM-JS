import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/VideoList';

function App() {


  const [videos, setVideos] = useState({
    currentVideos: [],
    selectedVideo: null
  })

  useEffect(() => {

    YTSearch({ key: "AIzaSyCD3D25-waRMJsn9kGX41IZahz-VY2t2bg", term: 'java' }, function (data) {
      console.log("data", data);
      setVideos({ ...videos, currentVideos: data })
    })

  }, [])

  return (
    <div className="App">
      <VideoList videos={videos.currentVideos}></VideoList>
    </div>
  );
}

export default App;





