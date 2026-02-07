import { useState } from 'react';
import { Link } from 'react-router-dom';

import './topo.css';

export default function Topo() {
  const [ativar, setAtivar] = useState('nav-list');
  const navList = () => {
    ativar === 'nav-list' ? setAtivar('nav-list nav-active') : setAtivar('nav-list');
  };
  return (
    <header className="header">
      <div className="limitar-secao navbar">
        <div className="nome-topo">
          <a className="link-nome" href="#home">
            <h1>
              Ryan<span>.Dev</span>
            </h1>
          </a>
        </div>
        <nav>
          <div className="mobile-menu" onClick={navList}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line2"></div>
          </div>

          <div className={ativar}>
            <Link to="/" className="link-topo link-home">
              Home
            </Link>
            <Link to="/Sobre" className="link-topo">
              Sobre
            </Link>
            <Link to="/Skills" className="link-topo">
              Skills
            </Link>
            <Link to="/Projetos" className="link-topo">
              Projetos
            </Link>
            {/* <Link to="/Contato" className="link-topo">Contato</Link> */}
            <Link to="/Certificados" className="link-topo">
              Certificados
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
