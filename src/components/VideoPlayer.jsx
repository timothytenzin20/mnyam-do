import React, { useRef, useState, useEffect } from 'react';
import Popup from './Popup';

const VideoPlayer = ({ src, poster, timestamps }) => {
  const videoRef = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [currentPopupData, setCurrentPopupData] = useState(null);
  const [lastTriggeredTime, setLastTriggeredTime] = useState(null); // Track last triggered timestamp

  const handleTimeUpdate = () => {
    const currentTime = videoRef.current.currentTime;

    // Check for timestamps that have not been triggered yet
    for (let i = 0; i < timestamps.length; i++) {
      const { time, popupData } = timestamps[i];

      if (
        currentTime >= time - 0.1 && // Trigger slightly before the timestamp
        currentTime < time + 0.1 && // Small buffer to avoid rapid firing
        (lastTriggeredTime === null || time > lastTriggeredTime) // Ensure it's a new timestamp
      ) {
        videoRef.current.pause(); // Pause the video
        setPopupOpen(true); // Open the popup
        setCurrentPopupData(popupData); // Set popup data
        setLastTriggeredTime(time); // Update the last triggered timestamp
        break; // Exit loop once a timestamp is triggered
      }
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
    videoRef.current.play(); // Resume video playback
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    // Initial check for the first timestamp when the component mounts
    const checkInitialTimestamp = () => {
      const currentTime = videoElement.currentTime;

      // Check if the video starts at a timestamp
      for (let i = 0; i < timestamps.length; i++) {
        const { time, popupData } = timestamps[i];
        
        if (currentTime >= time - 0.1 && currentTime < time + 0.1) {
          videoElement.pause(); // Pause the video
          setPopupOpen(true); // Open the popup
          setCurrentPopupData(popupData); // Set popup data
          setLastTriggeredTime(time); // Update the last triggered timestamp
          break;
        }
      }
    };

    videoElement.addEventListener('loadeddata', checkInitialTimestamp);

    return () => {
      videoElement.removeEventListener('loadeddata', checkInitialTimestamp);
    };
  }, [timestamps]);

  return (  
    <div className="w-screen h-screen flex items-center justify-center">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-[90%] h-[90%] object-cover"
        controls
        autoPlay
        onTimeUpdate={handleTimeUpdate}
      />
      {popupOpen && currentPopupData && (
        <Popup
          open={popupOpen}
          onClose={closePopup}
          title="Information"
          imageSrc={currentPopupData.image}
          content={currentPopupData.text}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
