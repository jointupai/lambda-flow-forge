
import React from 'react';

interface YouTubeEmbedProps {
  url: string;
  title?: string;
  caption?: string;
  displaySize?: 'small' | 'medium' | 'large' | 'full';
  alignment?: 'left' | 'center' | 'right';
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  url,
  title,
  caption,
  displaySize = 'medium',
  alignment = 'center',
}) => {
  // Extract video ID from various YouTube URL formats
  const getVideoId = (url: string) => {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[1].length === 11 ? match[1] : null;
  };

  const videoId = getVideoId(url);
  if (!videoId) return null;

  // Define size classes based on displaySize
  const sizeClasses: Record<string, string> = {
    small: 'max-w-md',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    full: 'w-full',
  };

  // Define alignment classes
  const alignmentClasses: Record<string, string> = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto',
  };

  return (
    <div className={`my-8 ${alignmentClasses[alignment]}`}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className={`relative ${sizeClasses[displaySize]}`}>
        <div className="relative pb-[56.25%] h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title || 'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      {caption && <p className="text-sm text-gray-400 mt-2">{caption}</p>}
    </div>
  );
};

export default YouTubeEmbed;
