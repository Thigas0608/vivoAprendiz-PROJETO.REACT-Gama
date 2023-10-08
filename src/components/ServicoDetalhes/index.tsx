import { Link, useParams } from "react-router-dom";
import { Form, Container } from "./style"; // Importando componentes de estilo
import Button from "../Button";
import axios from "axios";
import { useEffect, useState } from "react";

// Definição da interface para o objeto de detalhes do serviço
interface Servico {
  nome: string;
  servico: string;
  data: string;
  horario: string;
  status: string;
}

// Componente ServicoDetalhe
export default function ServicoDetalhe() {
  // Obtendo o parâmetro da URL (ID)
  const { id } = useParams<{ id: string }>();

  // Definindo o estado "servico" para armazenar os detalhes do serviço
  const [servico, setServico] = useState<Servico>({
    nome: "",
    servico: "",
    data: "",
    horario: "",
    status: "",
  });

  // Efeito que é executado quando o componente é montado ou quando o "id" muda
  useEffect(() => {
    axios
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      .get<Servico>(`http://localhost:3000/ordens/${id}`) // Usando o "id" da URL para buscar detalhes do serviço
      .then((response) => {
        setServico(response.data); // Armazena os detalhes do serviço no estado "servico"
      })
      .catch((error) => {
        console.error("Erro ao buscar os detalhes do serviço:", error);
      });
  }, [id]); // O efeito depende do valor de "id"

  return (
    <>
      <Container>
        <Form>
          <label>Nome do cliente</label>
          <input type="text" value={servico.nome} disabled />

          <label>Serviço solicitado</label>
          <input type="text" value={servico.servico} disabled />

          <label>Data de contratação</label>
          <input type="text" value={servico.data} disabled />

          <label>Horario sugerido</label>
          <input type="text" value={servico.horario} disabled />

          <label>Status</label>
          <input type="text" value={servico.status} disabled />

          {/* Botão para voltar para a página de serviço */}
          <Link to="/servico">
            <Button style="cinza" text="Voltar" />
          </Link>
          {/* Botão para atender a solicitação */}
          <Button style="verdeTranparente" text="Atender solicitação" />
        </Form>
      </Container>
    </>
  );
}