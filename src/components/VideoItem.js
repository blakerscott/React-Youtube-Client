import React from 'react';

//Note: ({ videos }) == (props.videos), which allows you to write things
//like videos.list instead of props.videos.list
const VideoItem = ({ video }) => {
  return ( 
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};

export default VideoItem;