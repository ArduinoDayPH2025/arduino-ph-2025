// GlowText.tsx
import React from 'react';

interface GlowTextOrangeProps {
  children: React.ReactNode;
  className?: string;
}

const GlowTextOrange: React.FC<GlowTextOrangeProps> = ({ children, className }) => {
  return <span className={`glow-text-orange ${className ?? ''}`}>{children}</span>;
};

export default GlowTextOrange;
