import { motion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    { type: 'circle', size: 80, color: 'primary', x: '10%', y: '20%', duration: 20 },
    { type: 'square', size: 60, color: 'secondary', x: '80%', y: '70%', duration: 25 },
    { type: 'triangle', size: 70, color: 'primary', x: '70%', y: '15%', duration: 22 },
    { type: 'circle', size: 50, color: 'secondary', x: '15%', y: '80%', duration: 18 },
    { type: 'square', size: 90, color: 'primary', x: '85%', y: '30%', duration: 24 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {shape.type === 'circle' && (
            <motion.div
              className={`w-full h-full rounded-full bg-${shape.color}/10 backdrop-blur-sm`}
              style={{
                boxShadow: '0 8px 32px rgba(79, 70, 229, 0.15)',
                transform: 'translateZ(50px)',
              }}
              animate={{
                boxShadow: [
                  '0 8px 32px rgba(79, 70, 229, 0.15)',
                  '0 12px 48px rgba(79, 70, 229, 0.3)',
                  '0 8px 32px rgba(79, 70, 229, 0.15)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}
          {shape.type === 'square' && (
            <motion.div
              className={`w-full h-full bg-${shape.color}/10 backdrop-blur-sm rounded-lg`}
              style={{
                boxShadow: '0 8px 32px rgba(236, 72, 153, 0.15)',
                transform: 'rotateX(45deg) rotateY(45deg) translateZ(50px)',
              }}
              animate={{
                rotateX: [45, 90, 45],
                rotateY: [45, 90, 45],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          )}
          {shape.type === 'triangle' && (
            <div
              className={`w-0 h-0 border-l-[${shape.size/2}px] border-r-[${shape.size/2}px] border-b-[${shape.size}px] border-l-transparent border-r-transparent border-b-${shape.color}/10`}
              style={{
                filter: 'blur(1px)',
                transform: 'translateZ(30px)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingShapes;
