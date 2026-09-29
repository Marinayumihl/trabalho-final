import styles from './Projeto.module.css'

function Projeto({ titulo, descricao, tecnologias, imagem, link }) {
  return (
    <article className={styles.card}>
      <div className={styles.imagem}>
        <img
          src={imagem}
          alt={`Captura de tela do projeto ${titulo}`}
        />
      </div>

      <div className={styles.conteudo}>
        <h3>{titulo}</h3>

        <p>{descricao}</p>

        <div className={styles.tecnologias}>
          {tecnologias.map((tecnologia) => (
            <span key={tecnologia}>{tecnologia}</span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Ver no GitHub →
        </a>
      </div>
    </article>
  )
}

export default Projeto