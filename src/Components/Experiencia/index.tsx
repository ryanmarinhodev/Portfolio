import './experiencia.css';
import logoNasajon from './logo-nasajon.png';

const tecnologias = [
  'React',
  'TypeScript',
  'Vite',
  'Zustand',
  'TanStack Query',
  'Kendo UI',
  'Python',
  'Flask',
  'RestLib2',
  'REST API',
  'JSON',
  'PostgreSQL',
  'SQL',
  'Redis',
  'Docker',
  'RBAC',
  'Git',
  'GitHub',
  'CI/CD',
];

export default function Experiencia() {
  return (
    <section id="experiencia" className="limitar-secao secao-experiencia">
      <div className="experiencia-cabecalho">
        <h4>Minha trajetória</h4>
        <h2>Experiência profissional</h2>
      </div>

      <article className="experiencia-card">
        <div className="experiencia-logo">
          <img src={logoNasajon} alt="Logo da Nasajon" />
        </div>

        <div className="experiencia-conteudo">
          <div className="experiencia-topo">
            <div>
              <span className="experiencia-periodo">Jun 2025 - Mar 2026</span>
              <h3>Nasajon</h3>
              <p className="experiencia-cargo">Desenvolvedor Full Stack</p>
            </div>
          </div>

          <p className="experiencia-resumo">
            Atuei end-to-end no desenvolvimento de uma plataforma corporativa de gestão de horas, participando do
            levantamento de requisitos com PM e CTO, modelagem do banco de dados, desenvolvimento das interfaces,
            criação de APIs e deploy em produção.
          </p>

          <p className="experiencia-detalhes">
            A solução automatizou o fluxo de avaliação de tarefas e eliminou 100% do processo manual de análise
            gerencial, tornando a operação mais rápida, rastreável e escalável. Desenvolvi APIs RESTful em Python com
            Flask, implementei RBAC, otimizei PostgreSQL com Redis e Docker e criei interfaces em React e TypeScript
            usando Zustand, TanStack Query e Kendo UI. Também colaborei com PM, CTO e time de arquitetura em decisões
            técnicas, code reviews e evolução contínua da plataforma.
          </p>

          <div className="experiencia-tecnologias" aria-label="Tecnologias utilizadas na experiência">
            {tecnologias.map((tecnologia) => (
              <span className="experiencia-tech" key={tecnologia}>
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
