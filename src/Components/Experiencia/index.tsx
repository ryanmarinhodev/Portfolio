import "./experiencia.css";
import logoNasajon from "./logo-nasajon.png";
import logoOplium from "./Logotipo Oplium Cyber for Life.png";

const experiencias = [
  {
    id: 1,
    empresa: "Nasajon",
    cargo: "Desenvolvedor de Software",
    tecnologias: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Kendo UI",
      "Python",
      "Flask",
      "RestLib2",
      "REST API",
      "JSON",
      "PostgreSQL",
      "SQL",
      "Redis",
      "Docker",
      "RBAC",
      "Git",
      "GitHub",
      "CI/CD",
    ],
  },
  {
    id: 2,
    empresa: "Oplium",
    cargo: "Desenvolvedor Full Stack",
    tecnologias: [
      "TypeScript",
      "Node.js",
      "AdonisJS",
      "Vue.js",
      "Python",
      "REST API",
      "Oracle",
      "SQL",
      "Redis",
      "Docker",
      "Git",
      "Azure DevOps",
      "Scrum",
      "Linux",
    ],
  },
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
          <img src={logoOplium} alt="Logo Oplium" />
        </div>

        <div className="experiencia-conteudo">
          <div className="experiencia-topo">
            <div>
              <span className="experiencia-periodo">
                Jun 2026 - Atual Momento
              </span>
              <h3>Grupo Oplium</h3>
              <p className="experiencia-cargo">Desenvolvedor Full Stack</p>
            </div>
          </div>

          <p className="experiencia-resumo">
            Atuo como Desenvolvedor Full Stack, contribuindo para o
            desenvolvimento e a evolução de soluções de automação de engenharia
            voltadas a um dos maiores clientes do setor de telecomunicações do
            Brasil. Minha atuação envolve o desenvolvimento e a evolução de
            funcionalidades end-to-end, implementação de regras de negócio,
            validação e padronização de dados, além de integrações entre APIs. O
            trabalho é direcionado à otimização de processos operacionais,
            redução de atividades repetitivas e maior confiabilidade das
            informações ao longo dos fluxos de engenharia.
          </p>

          <p className="experiencia-detalhes">
            Além do desenvolvimento, atuo na investigação e resolução de bugs,
            análise de inconsistências e identificação de falhas em integrações,
            buscando compreender a origem dos problemas e contribuir para
            soluções efetivas. Mantenho contato direto com stakeholders, equipes
            técnicas e representantes do cliente para investigar ocorrências,
            esclarecer requisitos e alinhar regras de negócio. Trabalho em um
            ambiente ágil, seguindo Scrum, participando das etapas de
            desenvolvimento, testes, homologação e melhoria contínua das
            aplicações.
          </p>

          <div
            className="experiencia-tecnologias"
            aria-label="Tecnologias utilizadas na experiência"
          >
            {experiencias
              .find((experiencia) => experiencia.empresa === "Oplium")
              ?.tecnologias.map((tecnologia) => (
                <span className="experiencia-tech" key={tecnologia}>
                  {tecnologia}
                </span>
              ))}
          </div>
        </div>
      </article>

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
            Atuei end-to-end no desenvolvimento de uma plataforma corporativa de
            gestão de horas, participando do levantamento de requisitos com PM e
            CTO, modelagem do banco de dados, desenvolvimento das interfaces,
            criação de APIs e deploy em produção.
          </p>

          <p className="experiencia-detalhes">
            A solução automatizou o fluxo de avaliação de tarefas e eliminou
            100% do processo manual de análise gerencial, tornando a operação
            mais rápida, rastreável e escalável. Desenvolvi APIs RESTful em
            Python com Flask, implementei RBAC, otimizei PostgreSQL com Redis e
            Docker e criei interfaces em React e TypeScript usando Zustand,
            TanStack Query e Kendo UI. Também colaborei com PM, CTO e time de
            arquitetura em decisões técnicas, code reviews e evolução contínua
            da plataforma.
          </p>

          <div
            className="experiencia-tecnologias"
            aria-label="Tecnologias utilizadas na experiência"
          >
            {experiencias
              .find((experiencia) => experiencia.empresa === "Nasajon")
              ?.tecnologias.map((tecnologia) => (
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
