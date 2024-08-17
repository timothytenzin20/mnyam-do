import React, { useState, useRef, useEffect } from 'react';
import img1 from '../assets/pfp.png';
import img2 from '../assets/pfp.png';
import img3 from '../assets/pfp.png';
import img4 from '../assets/pfp.png';

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
            <div className="w-40 h-40 rounded-full bg-indigo-500 flex items-center justify-center">
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
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
              Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
              Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.

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
            <div className="w-40 h-40 rounded-full bg-flag-red flex items-center justify-center">
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
              Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
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
            <div className="w-40 h-40 rounded-full bg-flag-blue flex items-center justify-center">
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
              Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
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
              Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
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
