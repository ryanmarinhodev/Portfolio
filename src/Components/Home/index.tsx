import './home.css';

import { LinkedinIcon, Github } from 'lucide-react';
import fotoBanner from '../../img/fotoryan.jpeg';

export default function Home() {
  return (
    <main className="limitar-secao">
      <div id="home" className="secao-home">
        <div className="descricao-home">
          <span className="span-desc">Software Developer</span>
          <h1 className="titulo-principal">
            Ryan <span>Marinho</span>
          </h1>
          <span className="span">| Full Stack Developer</span>
          <p>
            Desenvolvo aplicações web com foco em performance, experiência do usuário e impacto real no negócio.
            Neste portfólio, apresento projetos Front-End e Full Stack que evidenciam minha capacidade de transformar
            requisitos em soluções digitais claras, escaláveis e prontas para produção.
          </p>

          <div className="secao-link">
            <a className="link link-baixarCV" href="public/Curriculo-2026.pdf.pdf" download>
              Baixar CV
            </a>
            <a className="link link-meus-projetos" href="#projetos">
              Meus Projetos
            </a>
          </div>

          <div id="sobre" className="secao-redes">
            <p>Minhas redes: </p>
            <div className="secao-minhas-redes">
              <a href="https://www.linkedin.com/in/ryan-marinho-861120211/" className="link-social" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon size={28} />
              </a>
              <a href="https://github.com/ryanmarinhodev" className="link-social" target="_blank" rel="noopener noreferrer">
                <Github size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="banner-home">
          <img src={fotoBanner} alt="imagem" />
        </div>
      </div>
    </main>
  );
}
