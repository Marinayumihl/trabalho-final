import { useState } from 'react'
import './App.css'
import Projeto from './components/Projeto'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <header className="header">
        <a href="#inicio" className="logo">
          Marina Yumi
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir ou fechar menu"
          aria-expanded={menuAberto}
        >
          ☰
        </button>

        <nav className={menuAberto ? 'nav nav-aberto' : 'nav'}>
          <a href="#inicio" onClick={() => setMenuAberto(false)}>
            Início
          </a>

          <a href="#sobre" onClick={() => setMenuAberto(false)}>
            Sobre mim
          </a>

          <a href="#projetos" onClick={() => setMenuAberto(false)}>
            Projetos
          </a>

          <a href="#habilidades" onClick={() => setMenuAberto(false)}>
            Habilidades
          </a>

          <a href="#contato" onClick={() => setMenuAberto(false)}>
            Contato
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <p className="destaque">Olá, eu sou</p>

            <h1>Marina Yumi</h1>

            <h2>Desenvolvedora Front-end</h2>

            <p>
              Desenvolvo interfaces web responsivas e funcionais utilizando
              tecnologias modernas de desenvolvimento front-end.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="btn principal">
                Ver projetos
              </a>

              <a href="#contato" className="btn secundario">
                Contato
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="section">
          <p className="section-label">SOBRE MIM</p>

          <h2>Conheça um pouco sobre mim</h2>

          <div className="sobre-content">
            <div className="foto-container">
              <img
                src="/foto-marina.jpeg"
                alt="Foto de Marina Yumi"
                className="foto-perfil"
              />
            </div>

            <div>
              <p>
                Sou estudante e desenvolvedora front-end em formação, com
                interesse em criar experiências digitais funcionais,
                organizadas e responsivas.
              </p>

              <p>
                Durante meus estudos, desenvolvi projetos utilizando HTML,
                CSS, Sass, JavaScript, TypeScript, React e outras tecnologias,
                aplicando conceitos de componentização, consumo de APIs,
                gerenciamento de estado e responsividade.
              </p>
            </div>
          </div>
        </section>

        <section id="projetos" className="section projetos-section">
          <p className="section-label">PORTFÓLIO</p>

          <h2>Meus projetos</h2>

          <p className="section-description">
            Alguns projetos desenvolvidos durante minha formação em
            desenvolvimento front-end.
          </p>

          <div className="projetos-grid">
            <Projeto
              titulo="Agência Criativa Web"
              descricao="Site institucional responsivo desenvolvido para uma agência criativa, com foco em organização visual e boas práticas de estilização."
              tecnologias={['HTML', 'CSS', 'SASS']}
              imagem="/agencia-criativa.png"
              link="https://github.com/Marinayumihl/agencia-criativa-web"
            />

            <Projeto
              titulo="Catálogo de Livros"
              descricao="Aplicação para gerenciamento de livros com cadastro, listagem e remoção de registros utilizando integração com API REST."
              tecnologias={['React', 'TypeScript', 'API REST']}
              imagem="/lista-livros.png"
              link="https://github.com/Marinayumihl/booklist"
            />

            <Projeto
              titulo="Todo React Avançado"
              descricao="Gerenciador de tarefas desenvolvido em React utilizando Context API, hooks, filtros e persistência de dados com localStorage."
              tecnologias={[
                'React',
                'Context API',
                'Hooks',
                'localStorage',
              ]}
              imagem="/todo-react.png"
              link="https://github.com/Marinayumihl/todo-react-avancado"
            />
          </div>
        </section>

        <section id="habilidades" className="section">
          <p className="section-label">TECNOLOGIAS</p>

          <h2>Habilidades</h2>

          <div className="habilidades">
            {[
              'HTML',
              'CSS',
              'SASS',
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Bootstrap',
              'Git',
              'GitHub',
              'APIs REST',
              'Responsividade',
            ].map((habilidade) => (
              <span key={habilidade}>{habilidade}</span>
            ))}
          </div>
        </section>

        <section id="contato" className="section contato">
          <p className="section-label">CONTATO</p>

          <h2>Vamos conversar?</h2>

          <p>
            Você pode conhecer mais sobre meus projetos através do GitHub ou
            entrar em contato comigo por e-mail.
          </p>

          <div className="contato-links">
            <a
              href="https://github.com/Marinayumihl"
              target="_blank"
              rel="noreferrer"
              className="btn principal"
            >
              GitHub
            </a>

            <a
              href="mailto:mayumihlemes@gmail.com"
              className="btn secundario"
            >
              E-mail
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>Desenvolvido por Marina Yumi • 2026</p>
      </footer>
    </>
  )
}

export default App