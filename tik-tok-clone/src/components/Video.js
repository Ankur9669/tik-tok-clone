import React from 'react';
import "../css/video.css";
function Video() {
    return (
        <>
            <iframe 
            className = "video"
            src="https://www.youtube.com/embed/aYlv-KPeF-s?autoplay=0&mute=1&loop=1" 
            ></iframe>
        </>
    )
}

export default Video
