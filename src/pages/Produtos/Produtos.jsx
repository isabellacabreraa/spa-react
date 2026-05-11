import styles from './Produtos.module.css';

function Produtos() {
  const listaProdutos = [
    { id: 1, nome: "Jaqueta Bomber Aurora", desc: "Feita em tecido tecnológico com acabamento especial, esta jaqueta apresenta tons que variam entre o azul profundo e o violeta. Possui forro térmico leve, ideal para meia-estação.", preco: "R$ 189,90" },
    { id: 2, nome: "Calça Jogger Premium", desc: "Confeccionada em um mix de linho com elastano, esta calça oferece o visual elegante das fibras naturais com a liberdade de movimento necessária para o dia a dia.", preco: "R$ 129,90" },
    { id: 3, nome: "Suéter de Gola Alta", desc: "Tricotado em cashmere ultra-fino, este suéter possui uma trama respirável que mantém a temperatura corporal sem adicionar volume excessivo sob casacos.", preco: "R$ 249,90" },
    { id: 4, nome: "Vestido Midi Seda", desc: "Um vestido midi em seda lavada com caimento fluido. A estampa é orgânica, lembrando as ondas do mar em tons de areia e off-white.", preco: "R$ 199,90" }
  ];

  return (
    <section className={styles.container}>
      <h1>Nossos Produtos</h1>
      <p className={styles.subtitle}>Confira nossa seleção exclusiva de roupas premium</p>
      <div className={styles.lista}>
        {listaProdutos.map(s => (
          <div key={s.id} className={styles.produtosCard}>
            <div className={styles.cardHeader}>
              <h3>{s.nome}</h3>
              <span className={styles.preco}>{s.preco}</span>
            </div>
            <p>{s.desc}</p>
            <button className={styles.button}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Produtos;