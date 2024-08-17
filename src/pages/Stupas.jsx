import React from 'react';
import AppBar from '../components/AppBar'
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import video from '../assets/video.mp4'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'

const Lakes = () => {
  const timestamps = [
    {
      time: 19, // Pause at 19 seconds
      popupData: {
        text: 'Welcome to Mahabodhi Temple Complex, inside Bodh Gaya, India! This temple’s location is not only a UNESCO World Heritage Site but also marks one of the four locations where the Buddha is said to have reached enlightenment. Mahabodhi Temple was one of the earliest Buddhist temples built entirely of brick and is still standing. Additionally, Mahabodhi is said to have had significant influence in the development of brick architecture over the centuries.',
        image: 'https://via.placeholder.com/150' // Replace with the actual image URL if needed
      }
    },
    {
      time: 58, // Pause at 58 seconds
      popupData: {
        text: 'This area is known as Mucalinda Lake or Lotus Lake. According to legends, a strong storm rose while Siddhartha was meditating, and a big storm was prevented by the king, Muchalinda. Thus, this lake is now known to symbolize protection and divine intervention.',
        image: 'https://via.placeholder.com/150' // Replace with the actual image URL if needed
      }
    },
    {
      time: 415, // Pause at 6:55 minutes (415 seconds)
      popupData: {
        text: 'This area is known as the Bodhi Tree or the Tree of Awakening. This tree became significant as religious imagery because Siddhartha Gautama attained enlightenment under it. Although the original tree is no longer living, this tree is a descendant of the original planted around 250 BCE.',
        image: 'https://via.placeholder.com/150' // Replace with the actual image URL if needed
      }
    },
    {
      time: 610, // Pause at 10:10 minutes (610 seconds)
      popupData: {
        text: 'A cultural Buddhist prayer being led by a monk. Additionally, many people can be seen meditating and listening to the prayer.',
        image: 'https://via.placeholder.com/150' // Replace with the actual image URL if needed
      }
    }
  ];
  

  return (
    <div className="App">
      <AppBar></AppBar>
      <VideoPlayer
        src={video}
        poster="https://via.placeholder.com/800x450.png?text=Video+Poster"
        width="800px"
        height="450px"
        timestamps={timestamps}
      />
      <Footer/>
    </div>
  );
};

export default Lakes;
