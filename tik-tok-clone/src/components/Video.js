import React, {useState} from 'react';
import "../css/video.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import Ticker from "react-ticker";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
function Video(props) 
{
    
    let videoUrl = props.videoUrl;
    let userName = props.userName;
    let videoDescription = props.videoDescription;
    let songName = props.songName;
    let initialLikeCount = props.initialLikeCount;
    let initialCommentCount = props.initialCommentCount;
    let initialShareCount = props.initialShareCount;

    const [isLiked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikeCount);
    const [shareCount, setShareCount] = useState(initialShareCount);
    const [commentCount, setCommentCount] = useState(initialCommentCount);

    function onClickLike()
    {
        console.log("inside on click like");
        if(isLiked)
        {
            setLiked(false);
            setLikeCount(likeCount - 1);
        }    
        else{
            setLiked(true);
            setLikeCount(likeCount + 1);
        }
    }

    function onClickShare()
    {
        console.log("inside on click share");
        setShareCount(shareCount + 1);
    }

    function onClickComment()
    {
        console.log("inside on click share");
        setCommentCount(commentCount + 1);
    }

    return (
        <div className = "video-container">
            <iframe 
            className = "video"
            src={videoUrl} 
            ></iframe>

            {/* Video footer */}
            <div className = "video-footer">
                <h2 className = "video-footer-user-name">{userName}</h2>
                <p className = "video-footer-description">{videoDescription}</p>
                <div className = "video-ticker-container">
                    <MusicNoteIcon className = "video-music-icon"/>
                    <Ticker mode = "smooth" className = "video-ticker">
                        {
                            ({index}) => (
                                <>
                                 
                                    <p>{songName}</p>
                                </>
                            )
                        }
                    </Ticker>
                </div>
            </div>


            {/* Video Sidebar */}
            <div className = "video-sidebar">

                {/* if video is liked display filled fav icon*/}
                {/* else */}
                {/* display bordered unfilled fav icon*/}
                {isLiked ? (
                    <FavoriteIcon fontSize = "large" onClick = {onClickLike}/>
                ) : 
                (<FavoriteBorder fontSize = "large" onClick = {onClickLike}/>)
                }
                <p>{likeCount}</p>
               
                <CommentIcon fontSize = "large" onClick = {onClickComment}/>
                <p>{commentCount}</p>

                <ShareIcon fontSize = "large" onClick = {onClickShare}/>
                <p>{shareCount}</p>
            </div>
        </div>
    )
}

export default Video
