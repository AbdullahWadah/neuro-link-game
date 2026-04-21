import React from 'react';
import { Theme } from '../../data/themes';

interface BackgroundDecorationProps {
  theme: Theme;
}

const BackgroundDecoration: React.FC<BackgroundDecorationProps> = ({ theme }) => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-1/4 top-[-12%] h-[40vh] w-[40vh] rounded-full blur-[110px]"
        style={{ backgroundColor: theme.accentColor, opacity: 0.08 }}
      />
      <div
        className="absolute -right-1/4 bottom-[-14%] h-[42vh] w-[42vh] rounded-full blur-[120px]"
        style={{ backgroundColor: theme.accentColor, opacity: 0.06 }}
      />
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `radial-gradient(${theme.textColor} 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
        }}
      />
    </div>
  );
};

export default React.memo(BackgroundDecoration);
