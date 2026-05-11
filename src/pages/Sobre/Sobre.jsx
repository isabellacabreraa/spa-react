import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Sobre.module.css'

function Sobre() {
  return (
    <>
      <Header />

      <main className="sobre">
        <section className="about-container">
          <h2>Sobre a BlackRed Motors</h2>

          <p>
            A BlackRed Motors nasceu da paixão por carros de luxo e alta
            performance. Trabalhamos com veículos exclusivos das marcas mais
            desejadas do mundo.
          </p>

          <p>
            Nosso objetivo é entregar sofisticação, potência e uma experiência
            premium para cada cliente.
          </p>

          <p>
            Aqui você encontra modelos esportivos, supercarros e veículos de
            luxo selecionados cuidadosamente.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Sobre;