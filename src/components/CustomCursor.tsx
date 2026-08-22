'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<'default' | 'interactive' | 'explore' | 'view'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const exploreTarget = target.closest('[data-cursor="explore"]');
      const viewTarget = target.closest('[data-cursor="view"]');
      const interactiveTarget = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-target');

      if (exploreTarget) {
        setHoverState('explore');
      } else if (viewTarget) {
        setHoverState('view');
      } else if (interactiveTarget) {
        setHoverState('interactive');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  const isTextState = hoverState === 'explore' || hoverState === 'view';
  const size = isTextState ? 80 : (hoverState === 'interactive' ? 48 : 16);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center font-sans text-xs font-bold tracking-widest uppercase overflow-hidden"
      style={{
        border: isTextState ? 'none' : '2px solid #B87333',
        backgroundColor: isTextState ? '#B87333' : (hoverState === 'interactive' ? 'rgba(184, 115, 51, 0.2)' : 'transparent'),
        color: '#050505',
      }}
      animate={{
        x: mousePosition.x - size / 2,
        y: mousePosition.y - size / 2,
        width: size,
        height: size,
      }}
      transition={{
        type: 'spring',
        stiffness: 700,
        damping: 35,
        mass: 0.5,
      }}
    >
      <AnimatePresence mode="wait">
        {isTextState && (
          <motion.span
            key={hoverState}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {hoverState}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
