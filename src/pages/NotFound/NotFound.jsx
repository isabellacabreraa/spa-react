import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.errorWrapper}>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>Desculpe, a página que você está procurando não existe ou foi movida.</p>
      <Link to='/' className={styles.backButton}>
        ← Voltar à Página Inicial
      </Link>
    </section>
  );
}
export default NotFound;
