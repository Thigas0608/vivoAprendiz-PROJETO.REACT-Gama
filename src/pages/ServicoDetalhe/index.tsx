import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicoDetalhes from "../../components/ServicoDetalhes";

export default function ServicoDetalhe() {
    return (
      <>
        <Header />
        <main className="flex">
          <ServicoDetalhes />
        </main>
        <Footer />
      </>
    );
  }