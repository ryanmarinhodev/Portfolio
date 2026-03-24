import iconeGithub from '../../img/icone-github.png';

const ProjetoCard = ({ imagem, titulo, descricao, tecnologias, hospedagemLink, githubLink }: any) => {
  return (
    <div className="card-projetos">
      <img className="print-card" src={imagem} alt={`foto-${titulo}`} />
      <div className="descricao-projeto">
        <h3 className="subtitulo-descricao">{titulo}</h3>
        <p className="paragrafo-descricao-projetos">{descricao}</p>
        <div className="secao-tecnologias">
          {tecnologias.map((tecnologia: string) => (
            <p className="tecnologias" key={tecnologia}>
              {tecnologia}
            </p>
          ))}
        </div>
        <nav className="link-projetos">
          <a className="link-hospedagem" href={hospedagemLink} target="_blank" rel="noopener noreferrer">
            Ver projeto
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img className="icone-github" src={iconeGithub} alt="iconegithub" />
          </a>
        </nav>
      </div>
    </div>
  );
};

export default ProjetoCard;
