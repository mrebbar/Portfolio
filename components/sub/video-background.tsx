"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type VideoBackgroundProps = {
  src: string;
  className?: string;
  containerClassName?: string;
};

export const VideoBackground = ({
  src,
  className,
  containerClassName,
}: VideoBackgroundProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-purple-900/30 via-[#030014] to-[#030014]",
          containerClassName
        )}
      />
    );
  }

  return (
    <video
      loop
      muted
      autoPlay
      playsInline
      preload="none"
      onError={() => setHasError(true)}
      className={className}
    >
      <source src={src} type="video/webm" />
    </video>
  );
};
