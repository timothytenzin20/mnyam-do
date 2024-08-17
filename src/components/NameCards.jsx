import React, { useState, useRef, useEffect } from 'react';
import img1 from '../assets/pfp.png';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function NameCards() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [contentHeight, setContentHeight] = useState({});
  const contentRef = useRef({});

  const handleToggle = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  useEffect(() => {
    // Update content height for each card
    const newContentHeight = {};
    Object.keys(contentRef.current).forEach((key) => {
      newContentHeight[key] = contentRef.current[key].scrollHeight;
    });
    setContentHeight(newContentHeight);
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-10 gap-6">
      {/* Card 1 */}
      <div className="p-4 max-w-lg">
        <div className="relative flex flex-col items-center rounded-lg w-full bg-box-gray">
          {/* Outer Circle */}
          <div className="absolute top-[-3rem] flex justify-center w-full">
            <div className="w-40 h-40 rounded-full bg-box-gray flex items-center justify-center">
              {/* Inner Circle with Image */}
              <img src={img1} alt="Timothy Tenzin Khan picture" className="w-36 h-36 rounded-full object-cover" />
            </div>
          </div>
          {/* Main Content */}
          <div className="pt-20 flex flex-col justify-between flex-grow mt-16 p-8">
            <h2 className="text-black text-lg font-medium text-center">Timothy Tenzin Khan</h2>
            <div
              ref={(el) => (contentRef.current[1] = el)}
              className={`leading-relaxed text-base text-black text-center overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: expandedCard === 1 ? `${contentHeight[1]}px` : '5rem' }}
            >
              Hello, everyone, Tashi Delek! My name is Timothy Tenzin Khan, and I'm a third-year Computer Engineering student at the University of Guelph. I've consistently pushed myself academically, and I’m eager to channel that same dedication into this, my second hackathon. I enjoy blending my cultural heritage with my passion for programming, which gives my projects a distinct and personal touch. I hope to continue exploring full-stack projects and developing myself as a Tibetan programmer, and I’m excited to contribute my skills and explore new ideas in this collaborative setting.
              </div>
            <button onClick={() => handleToggle(1)} className="mt-3 text-black hover:text-blue-600 inline-flex items-center mx-auto">
              {expandedCard === 1 ? 'Show Less' : 'Read More'}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-4 max-w-lg">
        <div className="relative flex flex-col items-center rounded-lg w-full bg-box-gray">
          {/* Outer Circle */}
          <div className="absolute top-[-3rem] flex justify-center w-full">
            <div className="w-40 h-40 rounded-full bg-box-gray flex items-center justify-center">
              {/* Inner Circle with Image */}
              <img src={img2} alt="Tenzin Choeden Nepali picture" className="w-36 h-36 rounded-full object-cover" />
            </div>
          </div>
          {/* Main Content */}
          <div className="pt-20 flex flex-col justify-between flex-grow mt-16 p-8">
            <h2 className="text-black text-lg font-medium text-center">Tenzin Choeden Nepali</h2>
            <div
              ref={(el) => (contentRef.current[2] = el)}
              className={`leading-relaxed text-base text-black text-center overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: expandedCard === 2 ? `${contentHeight[2]}px` : '5rem' }}
            >
              Hello, my name is Tenzin Choeden and I am currently a rising senior inside of highschool. Throughout highschool I have constantly challenged myself by taking hard classes and I will continue this spirit throughout the Hackathon as I work my hardest. Although this is my first hackathon, I have worked with other Tibetan organizations before. Currently I am a Rokpa scholar and a board member at my local RTYC chapter.
              </div>
            <button onClick={() => handleToggle(2)} className="mt-3 text-black hover:text-blue-600 inline-flex items-center mx-auto">
              {expandedCard === 2 ? 'Show Less' : 'Read More'}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-4 max-w-lg">
        <div className="relative flex flex-col items-center rounded-lg w-full bg-box-gray">
          {/* Outer Circle */}
          <div className="absolute top-[-3rem] flex justify-center w-full">
            <div className="w-40 h-40 rounded-full bg-box-gray flex items-center justify-center">
              {/* Inner Circle with Image */}
              <img src={img3} alt="Tenzin Rigsang picture" className="w-36 h-36 rounded-full object-cover" />
            </div>
          </div>
          {/* Main Content */}
          <div className="pt-20 flex flex-col justify-between flex-grow mt-16 p-8">
            <h2 className="text-black text-lg font-medium text-center">Tenzin Rigsang</h2>
            <div
              ref={(el) => (contentRef.current[3] = el)}
              className={`leading-relaxed text-base text-black text-center overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: expandedCard === 3 ? `${contentHeight[3]}px` : '5rem' }}
            >
              Tashi Delek! My name is Tenzin Rigsang. I graduated with a degree in Finance from Baruch College and have experience working in a corporate finance advisory firm. I'm new to the world of technology and this is my first Hackathon. My main goal is to embark on this journey as an adventure, work on an exciting project, and learn from and connect with other Tibetans in the tech space. In my spare time, I actively volunteer with Students for a Free Tibet (SFT).
            </div>
            <button onClick={() => handleToggle(3)} className="mt-3 text-black hover:text-blue-600 inline-flex items-center mx-auto">
              {expandedCard === 3 ? 'Show Less' : 'Read More'}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="p-4 max-w-lg">
        <div className="relative flex flex-col items-center rounded-lg w-full bg-box-gray">
          {/* Outer Circle */}
          <div className="absolute top-[-3rem] flex justify-center w-full">
            <div className="w-40 h-40 rounded-full bg-box-gray flex items-center justify-center">
              {/* Inner Circle with Image */}
              <img src={img4} alt="Tenzin Tsephel picture" className="w-36 h-36 rounded-full object-cover" />
            </div>
          </div>
          {/* Main Content */}
          <div className="pt-20 flex flex-col justify-between flex-grow mt-16 p-8">
            <h2 className="text-black text-lg font-medium text-center">Tenzin Tsephel</h2>
            <div
              ref={(el) => (contentRef.current[4] = el)}
              className={`leading-relaxed text-base text-black text-center overflow-hidden transition-all duration-500 ease-in-out`}
              style={{ height: expandedCard === 4 ? `${contentHeight[4]}px` : '5rem' }}
            >
              Tashi Delek everyone, my name is Tenzin Tsephel, and I’m currently a second-year Data Science student at BMCC. This is my first Hackathon, and the opportunity to collaborate with fellow Tibetans has made it an inspiring and supportive experience. I’ve dabbled in C++ and am proficient in Canva and Tableau. I’m passionate about problem-solving and making data-driven decisions that create impact, and I hope to use my knowledge and skills to help further the Tibetan community. Beyond the numbers, I’m a lifelong learner, always exploring new challenges and opportunities for growth.
            </div>
            <button onClick={() => handleToggle(4)} className="mt-3 text-black hover:text-blue-600 inline-flex items-center mx-auto">
              {expandedCard === 4 ? 'Show Less' : 'Read More'}
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameCards;
