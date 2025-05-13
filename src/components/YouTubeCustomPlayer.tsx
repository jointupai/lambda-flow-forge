
import React, { useRef, useEffect, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface YouTubeCustomPlayerProps {
  videoId: string;
  title?: string;
  displaySize?: "small" | "medium" | "large" | "full";
  alignment?: "left" | "center" | "right";
  caption?: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const sizeClasses: Record<string, string> = {
  small: "max-w-md",
  medium: "max-w-2xl",
  large: "max-w-4xl",
  full: "w-full",
};

const alignmentClasses: Record<string, string> = {
  left: "mr-auto",
  center: "mx-auto",
  right: "ml-auto",
};

export const YouTubeCustomPlayer: React.FC<YouTubeCustomPlayerProps> = ({
  videoId,
  title,
  displaySize = "medium",
  alignment = "center",
  caption,
}) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    // Dynamically load the YouTube iframe API if not already loaded
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };
    if (window.YT && window.YT.Player) {
      createPlayer();
    }

    function createPlayer() {
      if (playerRef.current) {
        const ytPlayer = new window.YT.Player(playerRef.current, {
          videoId,
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              setDuration(event.target.getDuration());
              setCurrent(event.target.getCurrentTime());
              setPlayer(event.target);
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
                setDuration(event.target.getDuration());
                if (!interval) {
                  interval = setInterval(() => {
                    setCurrent(event.target.getCurrentTime());
                  }, 200);
                }
              } else {
                setIsPlaying(false);
                if (interval) {
                  clearInterval(interval);
                  interval = null;
                }
              }
            },
          },
          playerVars: {
            controls: 0,
            modestbranding: 1,
            rel: 0,
            fs: 1,
            iv_load_policy: 3,
            playsinline: 1,
          },
        });
      }
    }
    return () => {
      if (interval) clearInterval(interval);
      if (player && player.destroy) player.destroy();
    };
    // eslint-disable-next-line
  }, [videoId]);

  // For slider drag
  const handleSlider = (value: number[]) => {
    if (player && typeof player.seekTo === "function") {
      player.seekTo(value[0], true);
      setCurrent(value[0]);
    }
  };

  const handlePlay = () => {
    if (player) player.playVideo();
  };

  const handlePause = () => {
    if (player) player.pauseVideo();
  };

  // Format time to mm:ss
  const formatTime = (t: number) => {
    if (!t) return "0:00";
    const minutes = Math.floor(t / 60);
    const seconds = Math.floor(t % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={`my-8 ${alignmentClasses[alignment]}`}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className={`relative ${sizeClasses[displaySize]}`}>
        <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden">
          <div
            ref={playerRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            aria-label={title || "YouTube video player"}
          ></div>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            disabled={!isReady}
            className="p-2 rounded bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="text-white" />
            ) : (
              <Play className="text-white" />
            )}
          </button>
          <Slider
            value={[Math.floor(current)]}
            min={0}
            max={Math.floor(duration)}
            step={1}
            onValueChange={handleSlider}
            className="w-full max-w-xs"
            disabled={!isReady || duration === 0}
          />
          <span className="text-xs text-gray-300 whitespace-nowrap">
            {formatTime(current)} / {formatTime(duration)}
          </span>
        </div>
        {caption && (
          <p className="text-sm text-gray-400 mt-2">{caption}</p>
        )}
      </div>
    </div>
  );
};

export default YouTubeCustomPlayer;

