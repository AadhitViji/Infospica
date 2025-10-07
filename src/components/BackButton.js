import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const BackButton = ({ label = 'Back to Home' }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Navigating back to home');
    navigate('/');
  };

  return (
    <button 
      onClick={handleClick}
      className="back-button"
    >
      {label}
    </button>
  );
};

export default BackButton;
