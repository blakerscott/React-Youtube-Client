import React from 'react';
import VideoItem from './VideoItem';

//Note: ({ videos }) == (props.videos), which allows you to write things
//like videos.list instead of props.videos.list
const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
});

    return <div>{renderedList}</div>;
};

export default VideoList;