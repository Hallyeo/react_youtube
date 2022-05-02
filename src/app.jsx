import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const selectVideo = (video) => {
    setSelectedVideo(video)
  }
  const search = useCallback(
  query => {
    setSelectedVideo(null);  // 쿼리 결과에 상관없이 항상 초기화
    youtube
    .searchVideo(query) //
    .then(videos => {
      setVideos(videos);
    });
  }, []);

  useEffect(() => {
    youtube
    .mostPopular() //
    .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.appSection}>
      <SearchHeader onSearch={search} />
      <section className={styles.content}>
        { selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo? 'list' : 'grid'} />
        </div>
      </section>
    </div>
  )
}

export default App;
