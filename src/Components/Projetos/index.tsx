import { useState } from 'react';
import ProjetoCard from './projetocard';
import './projeto.css';
import home3 from '../../img/home3-site.png';
import home3_2026 from '../../img/home3-2026.png';
import ponto3 from '../../img/ponto3-site.png';
import ecommerce from '../../img/e-commerce.png';
import geizarabelo from '../../img/geiza-rabelo.png';
//import starWarsCharacters from "../../img/projeto-star-wars-characters.jpg";
import fullstack from '../../img/PROJETOfullstack.png';

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
          descricao="Desenvolvi um portal de clientes para a Home3 Tecnologia, com acesso organizado a projetos e documentos, controle administrativo e integração com a API do Google Drive, priorizando performance e segurança"
          tecnologias={['TYPESCRIPT', 'REACT', 'NODE.JS', 'POSTGRESQL', 'PRISMA ORM', 'API GOOGLE DRIVE']}
          hospedagemLink="https://home3tecnologiaportal.vercel.app/"
          githubLink="https://github.com/ryanmarinhodev/Home3tecnologia-portal"
        />
        <ProjetoCard
          imagem={ponto3}
          titulo="Freelancer Ponto3 Arquit. - NextJs"
          descricao="Desenvolvi projeto elegante para empresa de arquitetura com galeria minimalista e rotas dinâmicas em Next.js, focado em performance, usabilidade e experiência fluida com React e TypeScript."
          tecnologias={['NEXTJS', 'REACT', 'TYPESCRIPT']}
          hospedagemLink="https://ponto3arq-nextjs.vercel.app/"
          githubLink="https://github.com/ryanmarinhodev/ponto3arq-nextjs"
        />
        <ProjetoCard
          imagem={home3}
          titulo="Freelancer Home3 Tecnologia - 2024"
          descricao="Desenvolvi o site da Home3 Tecnologia com design moderno e responsivo, oferecendo uma experiência fluida e intuitiva, que valoriza a navegação dinâmica e destaca os serviços da empresa."
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
              titulo="Projeto Fullstack"
              descricao="Projeto full-stack com Node.js, React, TypeScript e MySQL. Possui autenticação de usuários, integração com API do YouTube e interface responsiva focada em navegação fluida e intuitiva."
              tecnologias={['Javascript', 'HTML', 'CSS']}
              hospedagemLink="https://github.com/ryanmarinhodev/projeto-youtube-api"
              githubLink="https://github.com/ryanmarinhodev/projeto-youtube-api"
            />
            <ProjetoCard
              imagem={ecommerce}
              titulo="e-Commerce"
              descricao="Desenvolvi e-commerce com integração à API do Mercado Livre, permitindo busca de produtos, adição e remoção no carrinho, além de cálculo de preços em uma interface simples e eficiente."
              tecnologias={['REACT.JS', 'JAVASCRIPT', 'HTML', 'CSS']}
              hospedagemLink="https://github.com/ryanmarinhodev/E-commerce"
              githubLink="https://github.com/ryanmarinhodev/E-commerce"
            />
            <ProjetoCard
              imagem={geizarabelo}
              titulo="Freelancer Instituto Rabelo"
              descricao="Criei o site do Instituto Rabelo para destacar a clínica e a Dra. Geiza Rabelo, com animações em JavaScript, carrossel de imagens e navegação leve e envolvente."
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
