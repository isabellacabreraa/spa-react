import styles from './Extra.module.css';

function Extra() {
  const equipe = [
    { id: 1, nome: "Maria Eduarda de Andrade", cargo: "Desenvolvedora Frontend", descricao: "Especialista em React e Design responsivo" },
    { id: 2, nome: "Daniel Casalli", cargo: "Desenvolvedor Full Stack", descricao: "Apaixonado por criar experiências web incríveis" }
  ];

  return (
    <section className={styles.equipe}>
      <h1>Nossa Equipe</h1>
      <p className={styles.subtitle}>Profissionais dedicados a criar soluções incríveis</p>
      <div className={styles.membros}>
        {equipe.map(membro => (
          <div key={membro.id} className={styles.membro}>
            <div className={styles.fotoPlaceholder}>👤</div>
            <h4>{membro.nome}</h4>
            <p className={styles.cargo}>{membro.cargo}</p>
            <p className={styles.descricao}>{membro.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Extra;