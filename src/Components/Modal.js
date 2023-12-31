import React, { useState, useEffect } from 'react';
import './modal.css';


         

const Modal = ({ movieName, onClose }) => {
  const apiKey = '2V77f8TNqLkqyjW5VdrSAf5oCoOrWhRr';
  const movieTag = encodeURIComponent(movieName);


 const [gifLink, setGifLink] = useState({});

  useEffect(() => {
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${movieTag}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.data.images.downsized_large.url);
      setGifLink(data.data.images.downsized_large.url);
    });
}, []); // Empty dependency array means the effect runs once on mount


return (
  <div className="modal">
    <div className="modal-content">
      <p>Rented "{movieName}" Successfully!</p>
      {gifLink ? (
        <img src={gifLink} alt="Related GIF" />
      ) : (
        <p>Loading GIF...</p>
      )}
      <button onClick={onClose}>X</button>
    </div>
  </div>
);

}

export default Modal;
