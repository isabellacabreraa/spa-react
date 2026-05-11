import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.heroSection}>
        {/* Camada de fundo com desfoque */}
        <div className={styles.blurBackground}></div>
        
        {/* Conteúdo centralizado */}
        <div className={styles.content}>
          <h1 className={styles.slogan}>
            LUXO, POTÊNCIA <br />
            <span className={styles.redText}>& EXCLUSIVIDADE</span>
          </h1>
          <p className={styles.subtitle}>A experiência definitiva em alta performance.</p>
          <button className={styles.ctaButton}>Ver Coleção</button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;  