import styles from './Headre.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        BLACK<span>RED</span> MOTORS
      </div>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;