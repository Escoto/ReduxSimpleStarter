import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (args) => {
  const videoItems = args.videos.map( video => {
    return (<VideoListItem
      key={video.etag}
      video={video}
      onVideoSelect={args.onVideoSelect} />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
