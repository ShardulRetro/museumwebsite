import React, { useState, useEffect } from 'react';
import './App.css';
import Menubar from './MenuBar.js';
import Footer from './Footer.js';
import artifact1 from './assets/artifact1.jpg';
import artifact2 from './assets/artifact2.jpg';
import artifact3 from './assets/artifact3.jpg';
import artifact4 from './assets/artifact4.jpg';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollItems = document.querySelectorAll('.scroll-item');

    function updateScrollItems() {
      scrollItems.forEach((item, index) => {
        item.classList.remove('prev', 'next', 'active');

        if (index === currentIndex) {
          item.classList.add('active');
        } else if (index === (currentIndex - 1 + scrollItems.length) % scrollItems.length) {
          item.classList.add('prev');
        } else if (index === (currentIndex + 1) % scrollItems.length) {
          item.classList.add('next');
        }
      });
    }

    function nextImage() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % document.querySelectorAll('.scroll-item').length);
    }

    updateScrollItems();
    const interval = setInterval(nextImage, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <Menubar />
      <div className="Content">
        <h1>Welcome to CSMVS</h1>
        <div className="chatbot-container">
          <IconButton
            color="primary"
            aria-label="chat"
            className="chatbot-button"
          >
            <ChatIcon className="chat-icon" />
          </IconButton>
        </div>
        <div className="video-container">
          {/* YouTube Video Embed with Autoplay */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WBwNw4WjV7g?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Chatbot Button */}
       
        {/* Horizontal Scroll Menu for Museum Artifacts */}
        <div className="scroll-container">
          <img src={artifact1} alt="Artifact 1" className="scroll-item" />
          <img src={artifact2} alt="Artifact 2" className="scroll-item" />
          <img src={artifact3} alt="Artifact 3" className="scroll-item" />
      
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
