import { useState, useEffect } from 'react';

import './style.css';

export const ScrollToTopButton = () => {
  const [voltarTopo, setVoltarTopo] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const top = window.scrollY;
    setVoltarTopo(top > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    voltarTopo && (
      <div className="voltar-topo" onClick={scrollToTop}>
        <i className="seta up"></i>
      </div>
    )
  );
};
