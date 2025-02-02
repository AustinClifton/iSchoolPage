import React from 'react';
import '../css/AboutSections.css';
import Lottie from 'lottie-react';
import computerAnimation from '../../assets/animations/computer_animation.json';

const DataSections = ({ aboutObj }) => {
  return (
    <div className="aboutSection">
        
      {/** About text, including Title, Desc, Quote */}
      <div className="aboutText">
        
        {/** About Title */}
        <div className="aboutTitle">{aboutObj.title}.</div>
        
        {/** About Desc */}
        <div className="aboutDescription">{aboutObj.description}</div>
        
        {/** about quote */}
        <div className="aboutQuote">
          "{aboutObj.quote}"<br/><br/>~ {aboutObj.quoteAuthor}
        </div>
        
      </div>
      
      {/** LottieFile Animation */}
      <div className="computerAnimation">
        <Lottie animationData={computerAnimation} />
      </div>
      
    </div>
  );
};

export default DataSections;
