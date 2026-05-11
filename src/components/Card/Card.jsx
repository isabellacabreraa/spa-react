import styles from './Card.module.css';

function Card({ titulo, descricao }) {
    return (
        <div className={styles.card}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
        </div>
    );
}
export default Card;
