import './sobre.css';

import imagemSobre from '../../img/imagem-sobre1.png';

export default function Sobre() {
  return (
    <section className="limitar-secao secao-sobre">
      <img src={imagemSobre} alt="imagem-sobre" />
      <article className="sobre-descricao">
        <h4>Quem sou eu?</h4>
        <h2>Ryan Marinho,</h2>
        <h2 className="dev">Desenvolvedor Front-End</h2>
        <p id="skills">
          Desde que iniciei minha jornada como desenvolvedor web freelancer, venho trabalhando em projetos freelancer,
          onde tenho a oportunidade de transformar ideias em soluções digitais sob medida para cada cliente. Sou movido
          pela paixão por tecnologia e inovação, sempre buscando formas de melhorar a experiência do usuário e a
          eficiência dos projetos.
        </p>
      </article>
    </section>
  );
}
