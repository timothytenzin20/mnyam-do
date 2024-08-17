import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { Typography } from '@mui/material';
import '../App.css';
import thumbnail1 from '../assets/thumbnail1.png';
import GradientFillButton from '../components/GradientFillButton';
import Footer from '../components/Footer';


function Welcome() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animationClass, setAnimationClass] = useState('flipping-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('flipping-out');
      setTimeout(() => {
        setIsFlipped(prev => !prev);
        setAnimationClass('flipping-in');
      }, 1000); // Time matches the flipOut animation duration
    }, 5500); // Duration before the next flip

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* HEADER */}
      <AppBar />

      {/* WELCOME */}
      <div className='mt-5 mx-7 mb-5 rounded-md pb-5 p-1 bg-flag-blue'>
        <div className='flip-container'>
          <div className={`flip-content ${animationClass}`}>
            {!isFlipped ? (
              <Typography
                variant='h1'
                component='div'
                sx={{ color: 'white', fontFamily: 'Raleway', my: 3 }}
              >
                Tashi Delek
              </Typography>
            ) : (
              <Typography
                variant='h1'
                component='div'
                sx={{ color: 'white', fontFamily: 'Raleway', my: 3 }}
              >
                བཀྲ་ཤིས་བདེ་ལེགས།
              </Typography>
            )}
          </div>
        </div>
        <Typography variant='h6' component='div' sx={{ color: '#bc9547', fontStyle: 'oblique' }}>
          Welcome To Nyam Do
          <Typography variant='h9' component='div' sx={{ color: 'white', fontStyle: 'normal' }}>
            Select a theme to learn more!
          </Typography>
        </Typography>
      </div>

      {/* THEME CARDS */}
      <div className='mt-4 ml-4 mr-4 mb-4 rounded-md'>
        <div className="flex flex-wrap justify-center gap-4">
          {/* category 1 */}
          <div key="category1" className="max-w-lg" style={{ minWidth: '20rem', minHeight: '20rem' }}>
            <div className="relative flex flex-col items-center rounded-lg w-80 h-90 bg-box-gray shadow-2xl">
              <img src={thumbnail1} alt="Museum picture" className="w-80 h-80 rounded-lg object-cover" />
              <div className="pt-20 flex flex-col justify-between flex-grow -mt-16 p-8">
                <h2 className="text-black text-lg font-medium text-center">Historical Sites</h2>
                <div>
                  <p>Famous Tibetan/Himalayan historical sites across the world</p>
                  <div className='p-3'>
                    <GradientFillButton href="/historical-sites" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* category 2 */}
          <div key="category2" className="max-w-lg" style={{ minWidth: '20rem', minHeight: '20rem' }}>
            <div className="relative flex flex-col items-center rounded-lg w-80 h-90 bg-box-gray shadow-2xl">
              <img src={thumbnail1} alt="Temple picture" className="w-80 h-80 rounded-lg object-cover" />
              <div className="pt-20 flex flex-col justify-between flex-grow -mt-16 p-8">
                <h2 className="text-black text-lg font-medium text-center">Temples</h2>
                <div>
                  <p>Famous Tibetan/Himalayan temples across the world</p>
                  <div className='p-3'>
                    <GradientFillButton href="/temples" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* category 3 */}
          <div key="category3" className="max-w-lg" style={{ minWidth: '20rem', minHeight: '20rem' }}>
            <div className="relative flex flex-col items-center rounded-lg w-80 h-90 bg-box-gray shadow-2xl">
              <img src={thumbnail1} alt="Museum picture" className="w-80 h-80 rounded-lg object-cover" />
              <div className="pt-20 flex flex-col justify-between flex-grow -mt-16 p-8">
                <h2 className="text-black text-lg font-medium text-center">Museums</h2>
                <div>
                  <p>Famous Tibetan/Himalayan museums across the world</p>
                  <div className='p-3'>
                    <GradientFillButton href="/museums" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* category 4 */}
          <div key="category4" className="max-w-lg" style={{ minWidth: '20rem', minHeight: '20rem' }}>
            <div className="relative flex flex-col items-center rounded-lg w-80 h-90 bg-box-gray shadow-2xl">
              <img src={thumbnail1} alt="Lake picture" className="w-80 h-80 rounded-lg object-cover" />
              <div className="pt-20 flex flex-col justify-between flex-grow -mt-16 p-8">
                <h2 className="text-black text-lg font-medium text-center">Lakes</h2>
                <div>
                  <p>Famous Tibetan/Himalayan lakes across the world</p>
                  <div className='p-3'>
                    <GradientFillButton href="/lakes" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Welcome;
