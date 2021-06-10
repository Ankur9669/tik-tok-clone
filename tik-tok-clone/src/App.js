import './App.css';
import Video from './components/Video';
import {useEffect, useState} from "react";
import axios from "./axios";
function App() 
{
  const [videos, setVideos] = useState([]);
  useEffect(() => 
  {
    async function fetchVideos()
    {
      const response = await axios.get("/v1/get");
      setVideos(response.data);
      return response;
    }
    fetchVideos();
  }, [])

  
  return (
    <div className="app">
      <div className = "videos">
        {videos.map(video => 
        {
          return (<Video
            initialLikeCount = {video.likeCount} 
            initialCommentCount = {video.commentCount} 
            initialShareCount = {video.shareCount}
            userName = {video.userName}
            videoDescription = {video.videoDescription}
            songName = {video.songName}
            videoUrl = {video.videoUrl}
          />)
        })}
      </div>
    </div>
  );
}

export default App;
