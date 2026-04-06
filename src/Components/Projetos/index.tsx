import { useState } from 'react';
import ProjetoCard from './projetocard';
import './projeto.css';
import home3 from '../../img/home3-site.png';
import home3_2026 from '../../img/home3-2026.png';
import ponto3 from '../../img/ponto3-site.png';
import ecommerce from '../../img/e-commerce.png';
import geizarabelo from '../../img/geiza-rabelo.png';
//import starWarsCharacters from "../../img/projeto-star-wars-characters.jpg";
import fullstack from '../../img/youtube-print.png';

export default function Projeto() {
  const [verMais, setVerMais] = useState(false);
  const [fraseBotao, setFraseBotao] = useState('Ver mais');

  const handleVerMaisClick = () => {
    if (verMais) {
      setVerMais(false);
      setFraseBotao('Ver mais');
    } else {
      setVerMais(true);
      setFraseBotao('Ver menos');
    }
  };

  return (
    <section id="projetos" className="limitar-secao secao-projetos">
      <h4 className="titulo-projeto">Hora de navegar em</h4>
      <h2 className="subtitulo-projeto">Meus projetos</h2>
      <div className="secao-card-projetos">
        <ProjetoCard
          imagem={home3_2026}
          titulo="Freelancer Home3 Tecnologia - 2026"
          descricao="Portal de clientes com área administrativa, organização de projetos e documentos e integração com a API do Google Drive. A solução reduziu retrabalho operacional e centralizou o acesso às informações com foco em segurança e performance."
          tecnologias={['TYPESCRIPT', 'REACT', 'NODE.JS', 'POSTGRESQL', 'PRISMA ORM', 'API GOOGLE DRIVE']}
          hospedagemLink="https://home3tecnologiaportal.vercel.app/"
          githubLink="https://github.com/ryanmarinhodev/Home3tecnologia-portal"
        />
        <ProjetoCard
          imagem={ponto3}
          titulo="Freelancer Ponto3 Arquit. - NextJs"
          descricao="Site institucional para escritório de arquitetura com galeria visual otimizada e rotas dinâmicas em Next.js. Entrega orientada à conversão, navegação fluida e carregamento rápido para valorizar o portfólio da marca."
          tecnologias={['NEXTJS', 'REACT', 'TYPESCRIPT']}
          hospedagemLink="https://ponto3arq-nextjs.vercel.app/"
          githubLink="https://github.com/ryanmarinhodev/ponto3arq-nextjs"
        />
        <ProjetoCard
          imagem={home3}
          titulo="Freelancer Home3 Tecnologia - 2024"
          descricao="Website responsivo desenvolvido para fortalecer a presença digital da Home3 Tecnologia. Estruturei uma experiência objetiva para apresentar serviços com clareza, melhorar a navegação e apoiar a geração de novos contatos comerciais."
          tecnologias={['REACT', 'JAVASCRIPT', 'STYLED']}
          hospedagemLink="https://home3tecnologia.com/"
          githubLink="https://github.com/ryanmarinhodev/Home3-react"
        />

        {/* Projetos parte de cima */}
      </div>

      <div className="secao-projeto-ver-mais">
        {verMais && (
          <div className="secao-card-projetos">
            <ProjetoCard
              imagem={fullstack}
              titulo="Projeto de Estudos - Full Stack"
              descricao="Projeto de estudos full stack voltado à evolução prática em front-end e back-end. Desenvolvi a camada de interface com React e implementei uma API com Node.js integrada a banco relacional (SQL/MariaDB), consolidando fundamentos de arquitetura, integração e fluxo ponta a ponta."
              tecnologias={['JAVASCRIPT', 'REACT', 'HTML', 'CSS', 'NODE.JS', 'SQL', 'MARIADB']}
              hospedagemLink="https://github.com/ryanmarinhodev/projeto-youtube-api"
              githubLink="https://github.com/ryanmarinhodev/projeto-youtube-api"
            />
            <ProjetoCard
              imagem={ecommerce}
              titulo="e-Commerce"
              descricao="E-commerce integrado à API do Mercado Livre com busca de produtos, gestão de carrinho e cálculo de valores em tempo real. A proposta foi validar uma jornada de compra simples, rápida e funcional."
              tecnologias={['REACT.JS', 'JAVASCRIPT', 'HTML', 'CSS']}
              hospedagemLink="https://github.com/ryanmarinhodev/E-commerce"
              githubLink="https://github.com/ryanmarinhodev/E-commerce"
            />
            <ProjetoCard
              imagem={geizarabelo}
              titulo="Freelancer Instituto Rabelo"
              descricao="Site institucional desenvolvido para fortalecer a comunicação da clínica e destacar serviços médicos. Usei animações em JavaScript e carrossel de imagens para tornar a experiência mais envolvente sem comprometer a usabilidade."
              tecnologias={['JAVASCRIPT', 'HTML', 'CSS']}
              hospedagemLink="https://institutorabelo.site/"
              githubLink="https://github.com/ryanmarinhodev/instituto-rabelo"
            />
            {/* <ProjetoCard
              imagem={starWarsCharacters}
              titulo="Star Wars Characters"
              descricao="Aqui temos várias informações sobre os personagens da saga Star Wars. Consumindo a API Swapi obtemos detalhes sobre mais de 80 personagens. É possível navegar entre as páginas e, clicando na foto do personagens, ver mais detalhes."
              tecnologias={["HTML", "CSS", "JAVASCRIPT"]}
              hospedagemLink="https://github.com/ryanmarinhodev/teste"
              githubLink="https://github.com/ryanmarinhodev/teste" */}
          </div>
        )}
      </div>

      <div className="secao-botao-ver">
        <button className="botao-ver" onClick={handleVerMaisClick}>
          {fraseBotao}
        </button>
      </div>
    </section>
  );
}
