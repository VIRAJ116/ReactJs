import { useEffect, useRef, useState } from 'react';
import Spinner from './Spinner';
import VideoItem from './VideoItem';
import '../css/videos.scss';

const BASE_URL = 'http://localhost:8000';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(function () {
    async function fetchVideos() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/videos/`);
        const data = await res.json();
        setVideos(data);
      } catch {
        alert('There was an error loading data....');
      } finally {
        setIsLoading(false);
      }
    }
    fetchVideos();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div className='container'>
      <ul>
        {videos.map((video) => (
          <VideoItem
            video={video}
            key={video.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
