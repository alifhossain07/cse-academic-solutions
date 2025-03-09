import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeComponent = () => {
    return (
      <div className="p-4 font-text font-semibold bg-blue-600 text-white">
      <Marquee speed={150} gradient={false}>
        <span className="mx-4 text-xl tracking-wider ml-48 mr-48">
         For International Viewers, Please Use English Language For Better Understanding and User Experience
        </span>
        <span className="mx-4 text-xl tracking-wider  ml-48 mr-48">
          Use The Dropdown in Right Side of the Header to Change Language
        </span>
        
      </Marquee>
    </div>
    );
};

export default MarqueeComponent;