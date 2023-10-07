import Footer from "../../components/Footer";
import Formulario from "../../components/Formulario";
import HeaderLogin from "../../components/HeaderLogin";
import TextoPrincipal from "../../components/TextoPrincipal";

export default function Login() {
  return (
    <>
      <HeaderLogin />
      <main className="flex">
        <TextoPrincipal
          titulo="Painel de Controle"
          descricao="Área exclusiva para funcionários."
        />
        <Formulario />
      </main>
      <Footer />
    </>
  );
}
