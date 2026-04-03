import './sobre.css';

import imagemSobre from '../../img/imagem-sobre1.png';

export default function Sobre() {
  return (
    <section className="limitar-secao secao-sobre">
      <img src={imagemSobre} alt="imagem-sobre" />
      <article className="sobre-descricao">
        <h4>Quem sou eu?</h4>
        <h2>Ryan Marinho,</h2>
        <h2 className="dev">Desenvolvedor Full Stack</h2>
        <p id="skills">
          Atuo como desenvolvedor web, criando soluções sob medida para empresas que precisam de produtos modernos,
          rápidos e bem estruturados. Na minha experiência mais recente, na Nasajon, conduzi a entrega de um produto
          de gestão de horas de ponta a ponta (start-to-end), desde o levantamento de requisitos até o deploy em
          produção. Atuei de forma full stack, cobrindo front-end, APIs e banco de dados, implementei autenticação e
          autorização com RBAC e apoiei práticas de CI/CD e testes automatizados para garantir estabilidade e evolução
          contínua da solução.
        </p>
      </article>
    </section>
  );
}
