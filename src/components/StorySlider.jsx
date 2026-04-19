import { useState, useEffect } from 'react';
import { storySlideImages } from '../data/storySlideImages';

const StorySlider = ({ images = storySlideImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  // Duplicate for seamless loop
  const extendedImages = [...images, images[0], images[1]];
  const translateX = -(currentIndex * (100 / 3)); // 3 images visible

  return (
    <div className="story-slider">
      <div 
        className="slider-track"
        style={{ 
          transform: `translateX(${translateX}%)`,
        }}
      >
        {extendedImages.map((imgSrc, index) => (
          <div key={`${imgSrc}-${index}`} className="slide-img">
            <img 
              src={new URL(imgSrc, import.meta.url).href}
              alt="Sabun ürünü örneği"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorySlider;

