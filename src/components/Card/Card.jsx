import styles from './Card.module.css';

function Card({ titulo, descricao, icon }) {
  return (
    <div className={styles.card}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button className={styles.button}>Saiba Mais</button>
    </div>
  );
}
export default Card;
