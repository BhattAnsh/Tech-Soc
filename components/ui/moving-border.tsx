"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useCallback } from "react";

export interface MovingBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  rx?: number;
  ry?: number;
  children?: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  rx = 30,
  ry = 30,
  containerClassName,
  borderClassName,
  className,
}: MovingBorderProps) {
  const pathLength = useMotionValue(0);
  const opacity = useMotionValue(1);


  const transform = useCallback((v: number) => {
    return Math.sin(v * Math.PI * 2);
  }, []);

  const transformX = useTransform(pathLength, transform);
  const transformY = useTransform(pathLength, transform);

  const moveX = useTransform(transformX, [-1, 1], [-rx, rx]);
  const moveY = useTransform(transformY, [-1, 1], [-ry, ry]);

  const onUpdate = useCallback((t: number) => {
    pathLength.set(t);
    opacity.set(1);
  }, [pathLength, opacity]);

  useAnimationFrame((t) => {
    const duration2 = duration;
    const t2 = (t / duration2) % 1;
    onUpdate(t2);
  });

  return (
    <div
      className={`relative ${containerClassName}`}
      style={{
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <motion.div
        className={`absolute inset-0 ${borderClassName}`}
        style={{
          x: moveX,
          y: moveY,
          opacity,
        }}
      />
      <div className={className}>{children}</div>
    </div>
  );
}
