import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="app">
      <div className = "videos">
        <Video initialLikeCount = {121} 
        initialCommentCount = {222} 
        initialShareCount = {333}
        userName = "Ankur"
        videoDescription = "hahah"
        songName = "Astronaut in the ocean"
        videoUrl = "https://www.youtube.com/embed/aYlv-KPeF-s?autoplay=0&mute=1&loop=1"/>

        <Video initialLikeCount = {121} 
        initialCommentCount = {222} 
        initialShareCount = {333}
        userName = "Ankur"
        videoDescription = "hahah"
        songName = "Astronaut in the ocean"
        videoUrl = "https://www.youtube.com/embed/aYlv-KPeF-s?autoplay=0&mute=1&loop=1"/>
      </div>
    </div>
  );
}

export default App;
