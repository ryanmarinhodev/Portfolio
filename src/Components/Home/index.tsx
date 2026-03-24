import './home.css';

import fotoBanner from '../../img/fotoryan.jpeg';
import iconeLinkedin from '../../img/icone-linkedin2.png'; 
import iconeGithub from '../../img/icone-github.png';

export default function Home() {
  return (
    <main className="limitar-secao">
      <div id="home" className="secao-home">
        <div className="descricao-home">
          <span className="span-desc">Software Developer</span>
          <h1 className="titulo-principal">Ryan Marinho</h1>
          <span className="span">| Front-End Developer</span>
          <p>
            Bem-vindo ao meu portfólio! Aqui você encontrará uma coleção dos meus projetos, competências e experiência
            profissional. Sinta-se à vontade para explorar e descobrir como posso colaborar em suas demandas.
          </p>

          <div className="secao-link">
            <a className="link link-baixarCV" href="public/RyanMarinho-curriculo-26.pdf" download>
              Baixar CV
            </a>
            <a className="link link-meus-projetos" href="#projetos">
              Meus Projetos
            </a>
          </div>

          <div id="sobre" className="secao-redes">
            <p>Minhas redes: </p>
            <div className="secao-minhas-redes">
              <a href="https://www.linkedin.com/in/ryan-marinho-861120211/" className="link-social" target="blank">
                <img src={iconeLinkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/ryanmarinhodev" className="link-social" target="blank">
                <img src={iconeGithub} alt="github" />
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
