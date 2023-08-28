import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextoPrincipal from "../../components/TextoPrincipal";
import Painel from "../../components/Painel"

export default function Servico() {
    return (
      <>
        <Header />
        <main className="flex">
          <TextoPrincipal
            titulo="Painel Administrativo"
            descricao="Área exclusiva para funcionários."
          />
          <Painel/>
        </main>
        <Footer />
      </>
    );
  }