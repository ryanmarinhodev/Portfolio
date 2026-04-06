import { useState } from 'react';

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
              Ryan<span> Dev</span>
            </h1>
          </a>
        </div>
        <nav>
          <div className="mobile-menu" onClick={navList} role="button" aria-label="Abrir menu de navegação" tabIndex={0}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line2"></div>
          </div>

          <div className={ativar}>
            <a href="#home" className="link-topo link-home">
              Home
            </a>
            <a href="#sobre" className="link-topo">
              Sobre
            </a>
            <a href="#skills" className="link-topo">
              Skills
            </a>
            <a href="#projetos" className="link-topo">
              Projetos
            </a>
            <a href="#certificados" className="link-topo">
              Certificados
            </a>
            <a href="#contato" className="link-topo">
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
