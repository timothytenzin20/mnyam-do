import React from 'react'
import img1 from '../assets/pfp.png'

function NameCards() {
  return (
    <div>

<div class="flex flex-wrap justify-center mt-10">

<div className="p-4 max-w-lg mx-auto">
        <div className="relative flex flex-col items-center rounded-lg w-full bg-box-gray">
          {/* Outer Circle */}
          <div className="absolute top-[-6rem] flex items-center justify-center w-full">
            <div className="w-40 h-40 rounded-full bg-indigo-500 flex items-center justify-center">
              {/* Inner Circle with Image */}
              <img src={img1} alt="Timothy Tenzin Khan picture" className="w-36 h-36 rounded-full object-cover" />
            </div>
          </div>
          {/* Main Content */}
          <div className="pt-20 flex flex-col justify-between flex-grow p-8 mt-12">
            <h2 className="text-black text-lg font-medium text-center">Timothy Tenzin Khan</h2>
            <p className="leading-relaxed text-base text-black text-center">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a href="#" className="mt-3 text-black hover:text-blue-600 inline-flex items-center mx-auto">
              Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>


<div class="p-4 max-w-lg">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Tenzin Choeden Nepali</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<div class="p-4 max-w-lg">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Tenzin Rigsang</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
                Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
            <a href="#" class="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>
</div>

<div class="p-4 max-w-lg">
    <div class="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
        <div class="flex items-center mb-3">
            <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
            </div>
            <h2 class="text-white dark:text-white text-lg font-medium">Tenzin zzzzzzz</h2>
        </div>
        <div class="flex flex-col justify-between flex-grow">
            <p class="leading-relaxed text-base text-white dark:text-gray-300">
            Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet 33 nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet.
            </p>
            <button onclick="myFunction()" id="myBtn">Read more</button>

        </div>
    </div>
</div>

</div>


    </div>
  )
}

export default NameCards
