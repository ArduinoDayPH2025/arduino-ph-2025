"use client";
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface HeadingProps {
  text: string,
  delay?: number,
  className?: string
}

const Heading = ({text, delay = 450, className}: HeadingProps) => {
    const [currentChar, setCurrentChar] = useState(0);
    const [currentDelay, setCurrentDelay] = useState(delay);

    const getNextValidIndex = (currentIndex: number) => {
        const nextIndex = currentIndex + 1;
        
        if (currentIndex >= text.length) {
          setCurrentDelay(delay * 2); 
          return 0;
        }

        if (text[nextIndex] === ' ') {
          return getNextValidIndex(nextIndex);
        }

        return nextIndex;
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentChar(prevChar => getNextValidIndex(prevChar));
        if (currentDelay != delay) {
            setCurrentDelay(delay)
        }
      }, currentDelay);
    
      return () => clearInterval(interval);
    }, []); 

    return (
      <div className='flex'>
        {text.split("").map((letter, index) => (
          letter === ' ' 
          ? <div key={index} className='w-4' />
          : <h2 
              key={index} 
              className={cn(
                'uppercase font-bold',
                letter !== ' ' && index === currentChar && 'glow-text',
                className
              )}
            >
              {letter}
            </h2>    
        ))}
      </div>
    );
}

export default Heading