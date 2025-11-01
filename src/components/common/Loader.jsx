import React, { useEffect, useMemo, useState } from 'react';

function Loader() {
  const [logoOpacity, setLogoOpacity] = useState(0.3);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Animate logo opacity from 30% to 100%
    const logoTimer = setTimeout(() => {
      setLogoOpacity(1);
    }, 500);

    // Show text after logo animation starts
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 1000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
    };
  }, []);

  const phrase = useMemo(() => 'art in the heart of your abode', []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <rect width="1000" height="1000" fill="white"/>
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" fill="rgba(104, 146, 19, 0.05)"></path>
      </svg>

      <div className="loader-wrap-heading">
        {/* Logo with opacity + subtle blur/bounce animation */}
        <div className="loader-logo" style={{ opacity: logoOpacity }}>
          <img 
            src="/home1/assets/img/logo.png" 
            alt="Einri Living" 
            className="logo-image"
          />
        </div>

        {/* Text that appears below with letter-by-letter blur reveal */}
        {textVisible && (
          <div className="loader-text" aria-label={phrase}>
            {phrase.split('').map((ch, i) => (
              <span
                key={i}
                className={`char${ch === ' ' ? ' space' : ''}`}
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Loader;
