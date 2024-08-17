import React from 'react';
import AppBar from '../components/AppBar'
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import video from '../assets/stupa.mp4'
import s1 from '../assets/s1.jpg'

const Stupas = () => {
  const timestamps = [
    {
      time: 1, // Pause at 19 seconds
      popupData: {
        text: 'Boudhanath Stupa, located in Kathmandu, Nepal, is one of the largest and most significant Buddhist stupas in the world. It is a UNESCO World Heritage Site and a major pilgrimage site for Buddhists. The stupa\'s massive white dome, topped with a golden spire, is surrounded by hundreds of prayer flags fluttering in the wind. The structure is adorned with the all-seeing eyes of Buddha, which gaze out in all four cardinal directions. Boudhanath is surrounded by a vibrant community of Tibetan refugees, and the area is filled with monasteries, shops, and cafes catering to pilgrims and tourists alike. The stupa is not only a religious symbol but also a center of Tibetan culture in Nepal. Visitors often walk clockwise around the stupa, spinning prayer wheels and reciting mantras as part of their spiritual practice.',
        image: s1 // Replace with the actual image URL if needed
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

export default Stupas;
