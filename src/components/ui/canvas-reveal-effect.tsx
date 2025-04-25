
"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  colors = [[0, 255, 255]],
  containerClassName,
  showGradient = true,
}: {
  animationSpeed?: number;
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <div className="h-full w-full">
        {/* Simplified animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated dots */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/20 animate-pulse"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${3 + Math.random() * 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

// Type definitions to maintain API compatibility
export interface ShaderProps {
  source: string;
  uniforms: {
    [key: string]: {
      value: number[] | number[][] | number;
      type: string;
    };
  };
  maxFps?: number;
}
