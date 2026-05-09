import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface ParticleEffectProps {
  x: number;
  y: number;
  color: string;
}

const ParticleEffect: React.FC<ParticleEffectProps> = ({ x, y, color }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => {
        const angle = (index / 5) * Math.PI * 2;
        const distance = 26 + index * 5;
        return {
          key: index,
          targetX: Math.cos(angle) * distance,
          targetY: Math.sin(angle) * distance,
          size: index % 2 === 0 ? 6 : 4,
        };
      }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.key}
          initial={{ x, y, scale: 0.92, opacity: 0.9 }}
          animate={{
            x: x + particle.targetX,
            y: y + particle.targetY,
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.42, ease: 'easeOut' }}
          className="absolute rounded-full will-change-transform"
          style={{
            backgroundColor: color,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(ParticleEffect);
