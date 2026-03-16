import React from 'react';
import { motion } from 'framer-motion';

interface ParticleEffectProps {
  x: number;
  y: number;
  color: string;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ x, y, color }) => {
  const particles = Array.from({ length: 8 });

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const distance = 40 + Math.random() * 20;
        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;

        return (
          <motion.div
            key={i}
            initial={{ x, y, scale: 1, opacity: 1 }}
            animate={{ 
              x: x + targetX, 
              y: y + targetY, 
              scale: 0, 
              opacity: 0 
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
};

export default ParticleEffect;