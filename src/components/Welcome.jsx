import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { Typography } from '@mui/material';
import '../App.css'; // Import your CSS file

function Welcome() {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
    }, 3000); // Delay before flipping

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AppBar />
      <div className='mt-4 ml-4 mr-4 mb-4 rounded-md pb-5 p-10 bg-flag-blue'>
        <div className={`flip-container ${isFlipped ? 'flipped' : ''}`}>
          <div className={`flip-content ${isFlipped ? 'flip-out' : 'flip-in'}`}>
            {!isFlipped ? (
              <Typography
                variant='h2'
                component='div'
                sx={{ color: 'white', fontFamily: 'Raleway' }}
              >
                Tashi Delek
              </Typography>
            ) : (
              <Typography
                variant='h2'
                component='div'
                sx={{ color: 'white', fontFamily: 'Raleway' }}
              >
                བཀྲ་ཤིས་བདེ་ལེགས།
              </Typography>
            )}
          </div>
        </div>
        <Typography variant='h6' component='div' sx={{ color: '#730d20', fontStyle: 'oblique' }}>
          Welcome To Nyamd Do
          <Typography variant='h9' component='div' sx={{ color: 'white', fontStyle: 'normal' }}>
            Select a theme to learn more!
          </Typography>
        </Typography>
      </div>
    </div>
  );
}

export default Welcome;
