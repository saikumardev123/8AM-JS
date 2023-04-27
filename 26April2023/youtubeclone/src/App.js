import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './Components/VideoList';
import VideoPlayer from './Components/VideoPlayer';
import SearchBar from './Components/SearchBar';

function App() {
  const [videos, setVideos] = useState({
    currentVideos: [],
    selectedVideo: null
  })
  const makeYoutubeAPICall = (term) => {
    YTSearch({ key: "AIzaSyCD3D25-waRMJsn9kGX41IZahz-VY2t2bg", term: term, maxResults: 10 }, function (data) {
      console.log("data", data);
      setVideos({ ...videos, currentVideos: data, selectedVideo: data[0] })
    })
  }
  useEffect(() => {
    makeYoutubeAPICall('cricket');
  }, [])
  return (
    <div className="App">
      <SearchBar onSearchTerm={
        (searchTerm) => {
          makeYoutubeAPICall(searchTerm);
        }
      }></SearchBar>
      <VideoPlayer video={videos.selectedVideo}></VideoPlayer>
      <VideoList onVideoSelect={
        (video) => {
          setVideos({ ...videos, selectedVideo: video })
        }
      } videos={videos.currentVideos}></VideoList>
    </div>
  );
}

export default App;







