import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicoDetalhes from "../../components/ServicoDetalhes";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function ServicoDetalhe() {
  return (
    <>
      <Header />
      <main className="flex">
        <TextoPrincipal
          titulo="Pedido #1232434566"
          descricao="Detalhes da solicitação"
        />
        <ServicoDetalhes />
      </main>
      <Footer />
    </>
  );
}