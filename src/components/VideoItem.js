import React from 'react';

//Note: ({ videos }) == (props.videos), which allows you to write things
//like videos.list instead of props.videos.list
const VideoItem = ({ video }) => {
  return ( 
    <div className="item">
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;