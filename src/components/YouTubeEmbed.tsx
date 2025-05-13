
import React from 'react';
import YouTubeCustomPlayer from "./YouTubeCustomPlayer";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  caption?: string;
  displaySize?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center' | 'right';
}

const getVideoId = (url: string) => {
  const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  url,
  title,
  caption,
  displaySize = 'medium',
  alignment = 'center',
}) => {
  const videoId = getVideoId(url);
  if (!videoId) return null;
  return (
    <YouTubeCustomPlayer
      videoId={videoId}
      title={title}
      displaySize={displaySize}
      alignment={alignment}
      caption={caption}
    />
  );
};

export default YouTubeEmbed;
