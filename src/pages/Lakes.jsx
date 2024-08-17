import React from 'react';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import VideoPlayer from '../components/VideoPlayer';
import video from '../assets/lake.mp4';
import l1 from '../assets/l1.jpg'; // Replace with actual images for each location
import l2 from '../assets/l2.jpg';
import l3 from '../assets/l3.jpg';
import l4 from '../assets/l4.jpg';
import l5 from '../assets/l5.jpg';
import l6 from '../assets/l6.jpg';
import l7 from '../assets/l7.png';
import l8 from '../assets/l8.jpg';

const Lakes = () => {
  const timestamps = [
    {
      time: 172, // Pause at 2:52 minutes
      popupData: {
        text: 'In the picture, devotees are seen prostrating before Rewalsar Lake, a sacred site for Buddhists and Hindus alike. Their reverent gestures reflect deep spirituality and respect for the divine presence they believe resides in this serene location. The tranquil waters of the lake mirror their devotion, creating a harmonious blend of faith and nature. This act of prostration is a symbol of humility and reverence, highlighting the deep cultural and spiritual significance of the lake.',
        image: l1 // Replace with the actual image
      }
    },
    {
      time: 209, // Pause at 3:29 minutes
      popupData: {
        text: 'The statue of Guru Rinpoche majestically overlooks Rewalsar Lake, embodying a serene presence and spiritual authority. With its commanding view of the tranquil waters below, the statue symbolizes protection and guidance for all who visit. Its imposing yet peaceful gaze reflects the deep spiritual significance of the lake and its surroundings.',
        image: l2 // Replace with the actual image
      }
    },
    {
      time: 237, // Pause at 3:57 minutes
      popupData: {
        text: 'Devotees circumambulate around Rewalsar Lake, moving slowly in a meditative procession. This sacred practice, known as kora, is a deeply spiritual ritual that symbolizes their devotion and the pursuit of inner peace. As they walk in reverence, the peaceful surroundings of the lake enhance the sense of connection with the divine. Each step taken in this sacred circuit is a testament to their faith and dedication.',
        image: l3 // Replace with the actual image
      }
    },
    {
      time: 397, // Pause at 6:37 minutes
      popupData: {
        text: 'The kora at Rewalsar Lake features hand-turned prayer wheels that devotees rotate as part of their spiritual practice. Each turn of the wheel releases blessings and positive energy, amplifying the power of their prayers. This ritual enhances the meditative atmosphere around the lake, allowing practitioners to align their physical movements with their spiritual intentions.',
        image: l4 // Replace with the actual image
      }
    },
    {
      time: 507, // Pause at 8:27 minutes
      popupData: {
        text: 'The shrine room next to Rewalsar Lake offers a tranquil space for reflection and worship. Adorned with religious artifacts and imagery, it provides a serene environment for visitors to connect spiritually. Its close proximity to the lake enhances the sense of peace and reverence, creating a harmonious setting for meditation and devotion.',
        image: l5 // Replace with the actual image
      }
    },
    {
      time: 617, // Pause at 10:17 minutes
      popupData: {
        text: 'Tibetan Buddhist monks perform a purification ceremony at Tso Pema Monastery, their chants and rituals infusing the air with spiritual energy. The ceremony aims to cleanse both physical and spiritual realms, inviting blessings and removing negativity. Surrounded by the monastery’s serene environment, the monks\' focused practice highlights the deep devotion and tradition of Tibetan Buddhism.',
        image: l6 // Replace with the actual image
      }
    },
    {
      time: 794, // Pause at 13:14 minutes
      popupData: {
        text: 'The front view of Tso Pema Monastery showcases its vibrant Tibetan architecture, with ornate details and rich colors standing out against the backdrop of Rewalsar Lake. Majestic prayer flags flutter in the breeze, adding movement and a sense of spirituality to the tranquil setting. The monastery’s design and serene surroundings create a peaceful environment for reflection and spiritual practice.',
        image: l7 // Replace with the actual image
      }
    },
    {
      time: 1133, // Pause at 18:53 minutes
      popupData: {
        text: 'Guru Rinpoche Cave, near Rewalsar Lake, is a revered site where Guru Padmasambhava is said to have meditated and attained spiritual insight. The cave’s serene and secluded environment provides a profound space for meditation and reflection. Inside, ancient relics and murals offer a glimpse into the rich spiritual traditions of Tibetan Buddhism.',
        image: l8 // Replace with the actual image
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

export default Lakes;
