import './sobre.css';

import imagemSobre from '../../img/imagem-sobre1.png';

export default function Sobre() {
  return (
    <section id="sobre" className="limitar-secao secao-sobre">
      <img src={imagemSobre} alt="imagem-sobre" />
      <article className="sobre-descricao">
        <h4>Quem sou eu?</h4>
        <h2>Ryan Marinho,</h2>
        <h2 className="dev">Desenvolvedor Full Stack</h2>
        <p>
          Atuo como desenvolvedor web, criando soluções sob medida para empresas que precisam de produtos modernos,
          rápidos e bem estruturados. Minha experiência combina projetos freelancer e atuação em ambiente corporativo,
          com foco em interfaces claras, APIs bem definidas e produtos que resolvem problemas reais de negócio.
        </p>
      </article>
    </section>
  );
}
