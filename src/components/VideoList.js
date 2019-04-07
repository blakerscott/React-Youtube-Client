import React from 'react';
import VideoItem from './VideoItem';

//Note: ({ videos }) == (props.videos), which allows you to write things
//like videos.list instead of props.videos.list
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
});

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;