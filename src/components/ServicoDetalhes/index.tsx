import { Link } from "react-router-dom";
import { Form, Container } from "./style";
import Button from "../Button";


export default function ServicoDetalhe() {
  return (
    <>
      <Container>
        <Form>
          <label>Nome do cliente</label>
          <input
            type="text"
            value="Joana da Silva"
            disabled
          />


          <label>Serviço solicitado</label>
          <input
            type="text"
            value="Plano 1 - Instalação"
            disabled
          />

          <label>Data de contratação</label>
          <input
            type="text"
            value="26/06/2023"
            disabled
          />

          <label>Horario sugerido</label>
          <input
            type="text"
            value="08:00 - 12:00"
            disabled
          />

          <label>Status</label>
          <input
            type=""
            value="Aguardando agendamento"
            disabled
          />

          <Link to="/servico"><Button style="cinza" text="Voltar" /></Link>
          <Link to="/relatorios"><Button style="verdeTranparente" text="atender solicitação" /></Link>

        </Form>
      </Container>
    </>
  );
}
