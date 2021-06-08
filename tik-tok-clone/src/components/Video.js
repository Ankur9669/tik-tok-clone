import React from 'react';
import "../css/video.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import Ticker from "react-ticker";
function Video() {
    return (
        <div className = "video-container">
            <iframe 
            className = "video"
            src="https://www.youtube.com/embed/aYlv-KPeF-s?autoplay=0&mute=1&loop=1" 
            ></iframe>

            {/* Video footer */}
            <div className = "video-footer">
                <h2 className = "video-footer-user-name">Ankur</h2>
                <p className = "video-footer-description">Yes it is my video</p>
                <div className = "video-ticker-container">
                    <MusicNoteIcon className = "video-music-icon"/>
                    <Ticker mode = "smooth" className = "video-ticker">
                        {
                            ({index}) => (
                                <>
                                    <p>Waste my hate on you</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>
            </div>


            {/* Video Sidebar */}
            <div className = "video-sidebar">
                <FavoriteIcon fontSize = "large"/>
                <p>1212</p>
                <CommentIcon fontSize = "large"/>
                <p>1212</p>
                <ShareIcon fontSize = "large"/>
                <p>1212</p>
            </div>
        </div>
    )
}

export default Video
