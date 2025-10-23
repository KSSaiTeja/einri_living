import React from 'react';

function Loader() {
  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <rect width="1000" height="1000" fill="white"/>
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" fill="rgba(104, 146, 19, 0.05)"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>E</span>
          <span>I</span>
          <span>N</span>
          <span>R</span>
          <span>I</span>
          <span> </span>
          <span>L</span>
          <span>I</span>
          <span>V</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
