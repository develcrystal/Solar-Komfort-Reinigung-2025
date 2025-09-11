import React, { ReactNode } from 'react';

interface TwoColContentProps {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}

export function TwoColContent({ left, right, className = '' }: TwoColContentProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 ${className}`}>
      <div className="space-y-6">
        {left}
      </div>
      <div className="space-y-6">
        {right}
      </div>
    </div>
  );
}
