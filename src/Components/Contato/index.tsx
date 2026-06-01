import './contato.css';

import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Contato() {
  const email = 'ryanmarinhodev@gmail.com';
  const mailToLink =
    'mailto:ryanmarinhodev@gmail.com?subject=Contato%20pelo%20portfolio&body=Ola%20Ryan%2C%20vi%20seu%20portfolio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.';

  const canaisContato = [
    {
      titulo: 'LinkedIn',
      descricao: 'Conectar e conversar sobre oportunidades',
      href: 'https://www.linkedin.com/in/ryan-marinho-861120211/',
      icone: Linkedin,
    },
    {
      titulo: 'GitHub',
      descricao: 'Ver codigo, estudos e projetos publicados',
      href: 'https://github.com/ryanmarinhodev',
      icone: Github,
    },
    {
      titulo: 'Curriculo',
      descricao: 'Baixar versao em PDF',
      href: '/Curriculo_Ryan_Marinho_Desenvolvedor_Fullstack.pdf',
      icone: Download,
      download: true,
    },
  ];

  return (
    <section id="contato" className="limitar-secao secao-contato">
      <div className="contato-cabecalho">
        <h4 className="subtitulo-contato">Vamos conversar?</h4>
        <h2 className="titulo-contato">Entre em contato ou acompanhe minhas redes.</h2>
        <p>
          Uso este espaco para centralizar meus principais canais profissionais. Me chame por e-mail, conecte-se comigo
          no LinkedIn ou acompanhe meus projetos no GitHub.
        </p>
      </div>

      <div className="contato-conteudo">
        <article className="contato-email">
          <div className="contato-icone">
            <Mail size={24} />
          </div>
          <span>Resposta mais direta</span>
          <h3>E-mail</h3>
          <p>Ideal para propostas, briefings e detalhes tecnicos do projeto.</p>
          <a className="contato-botao" href={mailToLink}>
            Enviar e-mail
            <ArrowUpRight size={18} />
          </a>
          <a className="contato-email-link" href={mailToLink}>
            {email}
          </a>
        </article>

        <div className="contato-canais" aria-label="Outros canais de contato">
          {canaisContato.map(({ titulo, descricao, href, icone: Icone, download }) => (
            <a
              className="contato-canal"
              href={href}
              key={titulo}
              target={download ? undefined : '_blank'}
              rel={download ? undefined : 'noopener noreferrer'}
              download={download}
            >
              <span className="contato-canal-icone">
                <Icone size={22} />
              </span>
              <span className="contato-canal-texto">
                <strong>{titulo}</strong>
                <small>{descricao}</small>
              </span>
              <ArrowUpRight className="contato-canal-seta" size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
