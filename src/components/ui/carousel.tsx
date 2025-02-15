import React, { useState, useEffect } from 'react';
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface CarouselItem {
  src: StaticImageData;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
  onSlideChange?: (index: number) => void;
}

export const Carousel: React.FC<CarouselProps> = ({ items, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [positions, setPositions] = useState(() => 
    items.map((_, index) => ({
      index,
      position: index - 1 
    }))
  );

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);

    setPositions(prev => {
      const newPositions = prev.map(item => ({
        ...item,
        position: item.position - 1
      }));
      
      return newPositions;
    });

    onSlideChange?.(nextIndex);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);

    setPositions(prev => {
      const newPositions = prev.map(item => ({
        ...item,
        position: item.position + 1
      }));
      
      return newPositions;
    });

    onSlideChange?.(prevIndex);
  };

  const getItemStyles = (position: number) => {
    if (position === 0) return 'z-20 scale-100 opacity-100 translate-x-0'; // Center
    if (position === -1) return 'z-10 md:-translate-x-[75%] md:scale-75 opacity-70 hidden md:block'; // Left
    if (position === 1) return 'z-10 md:translate-x-[75%] md:scale-75 opacity-70 hidden md:block'; // Right
    if (position < -1) return 'z-0 -translate-x-[150%] scale-50 opacity-50 hidden md:block'; // Far left
    if (position > 1) return 'z-0 translate-x-[150%] scale-50 opacity-50 hidden md:block'; // Far right
    return 'opacity-0 scale-0'; // Hidden
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [positions]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative h-[300px] md:h-[450px]">
        <div className='z-0'>
          <div className="orange-blur h-[200px] w-[170px] absolute rounded-full top-4 left-2 md:h-[260px] md:w-[230px] md:left-[33%]"></div>
          <div className='yellow-blur h-[200px] w-[170px] absolute rounded-full top-14 right-12 md:h-[260px] md:w-[230px] md:right-[39%] md:top-24'></div>
          <div className='blue-blur h-[200px] w-[170px] absolute rounded-full -bottom-4 right-12 md:h-[260px] md:w-[230px] md:right-[35%] md:-bottom-8'></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
        {positions.map(({ index, position }) => (
    <div
      key={index}
      className={`absolute transition-all duration-500 ease-in-out
        ${getItemStyles(position)}
      `}
      style={{
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <Image
        src={items[index].src}
        alt={items[index].alt}
        width={500}
        height={500}
        className="w-[250px] h-[250px] md:w-[500px] md:h-[500px] object-contain transition-all duration-500"
        priority
      />
    </div>
  ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="p-1 md:p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors ml-0 md:ml-4"
          disabled={isAnimating}
        >
          <CircleChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
        </button>
        <button
          onClick={handleNext}
          className="p-1 md:p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors mr-0 md:mr-4"
          disabled={isAnimating}
        >
          <CircleChevronRight className="w-8 h-8 md:w-12 md:h-12" />
        </button>
      </div>
    </div>
  );
};
