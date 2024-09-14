import React, { useRef, useState } from 'react';
import './css/fullscreen.css';

const FullscreenImage = ({ src }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imgRef = useRef(null);

  const openFullscreen = () => {
    const elem = imgRef.current;
    if (elem && document.body.contains(elem)) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
      } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  const closeFullscreen = () => {
    if (document.fullscreenElement !== null) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div>
      <img
        ref={imgRef}
        src={src}
        className='img-fluid m-5 p-3'
        alt="Click to view fullscreen"
        onClick={isFullscreen ? closeFullscreen : openFullscreen}
      />
    </div>
  );
};

export default FullscreenImage;
