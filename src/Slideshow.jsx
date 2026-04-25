import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Slideshow = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerDuration, setTimerDuration] = useState(30); // seconds
  const intervalRef = useRef(null);

  const stop = useCallback(() => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const next = useCallback(() => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      stop();
    }
  }, [currentIndex, images.length, stop]);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const first = () => {
    setCurrentIndex(0);
  };

  const end = () => {
    setCurrentIndex(images.length - 1);
  };

  const play = () => {
    if (!isPlaying && images.length > 0) {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      }
      setIsPlaying(true);
      intervalRef.current = setInterval(next, timerDuration * 1000);
    }
  };

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  useEffect(() => {
    if (isPlaying && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(next, timerDuration * 1000);
    }
  }, [timerDuration, isPlaying, next]);

  return (
    <>
    <title>Arthur Smith&apos;s Ancient Sabertooth | ITIS3135 | Slideshow</title>
    <Header />
    <h2>Slideshow</h2>
    <div>
      {images.length > 0 ? (
        <img src={images[currentIndex].url} alt="Dog" style={{ width: 'auto', maxHeight: '400px' }} />
      ) : (
        <p>Loading images...</p>
      )}
      <div>
        <button onClick={first} disabled={images.length === 0}>First</button>
        <button onClick={prev} disabled={images.length === 0}>Previous</button>
        <button onClick={play} disabled={isPlaying || images.length === 0}>Play</button>
        <button onClick={stop} disabled={!isPlaying}>Stop</button>
        <button onClick={next} disabled={images.length === 0}>Next</button>
        <button onClick={end} disabled={images.length === 0}>End</button>
      </div>
      <div>
        <label>
          Image Display Duration (seconds):
          <input
            type="number"
            value={timerDuration}
            onChange={(e) => setTimerDuration(Number(e.target.value))}
            min="1"
          />
        </label>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Slideshow;