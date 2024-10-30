import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-orange-100 px-8 py-24 text-left">
<h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
          Akasa Air <span className="text-orange-600">Web Check-In</span>
        </h1>
      <img 
        src="https://assets.akasaair.com/f/159922/1140x360/52f322836d/web-check-in.jpg/m/filters:format(webp)" 
        alt="Web Check-In" 
        className="w-full  my-6 rounded-xl shadow-lg"
      />
    </div>
  );
}

export default Hero;
