import { useEffect, useRef, useState } from 'react';
import { formatSubscribers } from '../utils/formatSubscriber';

function VideoItem({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showPlayPause, setShowPlayPause] = useState(false);
  const videoRef = useRef(null);

  const handleClick = (e) => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current.pause();
      setShowPlayPause(true);
      setTimeout(() => {
        setShowPlayPause(false);
      }, 2000);
    } else {
      videoRef.current.play();
      setIsPlaying((isPlaying) => !isPlaying);
      setShowPlayPause(true);
      setTimeout(() => {
        setShowPlayPause(false);
      }, 2000);
    }
  };

  const handleLike = () => {    
    setIsLiked((liked) => !liked);
  }

  const fromattedSubs = formatSubscribers(video.subscriber);
  return (
    <li>
      <video
        onClick={handleClick}
        id={video.id}
        src={video.videoUrl}
        ref={videoRef}
        loop
      ></video>
      <div className='video-info'>
        <div className='title-sub-wrapper'>
          <h2 className='title'>{video.title}</h2>
          <span className='subscribers'>{fromattedSubs}</span>
        </div>
        <p className='description'>{video.description}</p>
      </div>
      <span className={`play-pause ${showPlayPause ? '' : 'hide-playpause'}`}>
        {!isPlaying && <i className="fa-solid fa-play"></i>}
        {isPlaying && <i className="fa-solid fa-pause"></i>}
      </span>
      <span className={`like-video ${isLiked ? 'liked' : ''}`} role='button' onClick={handleLike}>
        <i className='fa-solid fa-thumbs-up'></i>
      </span>
    </li>
  );
}

export default VideoItem;
