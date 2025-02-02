import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="pageHeader">
      
      {/* RIT Logo Image */}
      <img className="ritImage" src="./images/ritLogo.svg" alt="RIT Logo Image" />
      
      {/* "Golisano College of Computing and Information Sciences" Title */}
      <a href="https://www.rit.edu/computing/school-of-information" target="_blank" className="pageTitle">
        <div className="title_1">Golisano College of</div>
        <div className="title_2">Computing and Information Sciences</div>
      </a>
      
    </div>
  );
};

export default Header;
