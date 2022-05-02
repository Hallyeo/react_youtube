import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(
  ({ video, video: {snippet}, onVideoClick, display }) => {
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
    <li className={`${styles.videoContainer} ${displayType}`} onClick={() => onVideoClick(video)}>
      <div className={styles.video}>
        <img
        className={styles.thumbnailImg}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
        />
        <div className={styles.metaData}>
          <p className={styles.videoTitle}>{snippet.title}</p>      
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>      
        </div>
      </div>
    </li>
    // <h1>{props.video.snippet.title}</h1>
    );
  }
)
export default VideoItem;