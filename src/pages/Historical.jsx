import React from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import video from '../assets/historical.mp4';
import h1 from '../assets/p1.jpg'; // Replace with actual images for each location
import h2 from '../assets/p2.jpg';

const Historical = () => {
  const timestamps = [
    {
      time: 277, // Pause at 4:37 minutes
      popupData: {
        text: 'This is the primary temple where the Dalai Lama often gives teachings and public talks. The temple houses large statues of Shakyamuni Buddha, Avalokiteshvara (the Bodhisattva of Compassion), and Padmasambhava (Guru Rinpoche). It also has beautiful murals depicting scenes from Tibetan Buddhist mythology.',
        image: h1 // Replace with the actual image
      }
    },
    {
      time: 470, // Pause at 7:50 minutes
      popupData: {
        text: 'A path for circumambulation around the temple complex, used by devotees for walking meditation. The path is lined with prayer flags and small shrines, providing a serene environment for reflection and spiritual practice.',
        image: h2 // Replace with the actual image
      }
    }
  ];

  return (
    <div className="App">
      <AppBar />
      <VideoPlayer
        src={video}
        poster="https://via.placeholder.com/800x450.png?text=Video+Poster"
        width="800px"
        height="450px"
        timestamps={timestamps}
      />
      <Footer />
    </div>
  );
};

export default Historical;
