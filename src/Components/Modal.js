import React, { useState, useEffect } from 'react';
import './modal.css'; // Import the CSS file

const Modal = ({ movieName, onClose }) => {

 const [gifUrl, setGifUrl] = useState('');

  // Function to fetch a related GIF from Giphy API
  const fetchGif = async () => {
    const apiKey = '2V77f8TNqLkqyjW5VdrSAf5oCoOrWhRr';
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=movie`);
    const data = await response.json();
    setGifUrl(data.data.image_url);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>Rented "{movieName}" Successfully!</p>
        {gifUrl && <img src={gifUrl} alt="Related GIF" />}
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;