import React, { ReactNode } from 'react';

interface TwoColContentProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}

export function TwoColContent({ left, right, className = '' }: TwoColContentProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">{left}</div>
        <div className="space-y-6">{right}</div>
      </div>
    </div>
  );
}