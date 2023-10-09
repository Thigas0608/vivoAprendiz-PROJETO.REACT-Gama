import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Modal from "../Modal";
import { PainelStyled, Filtro, Container } from "./style";
import axios from "axios";

interface Order {
  id: number;
  nome: string;
  plano: string;
  data: string;
  status: string;
}

export default function Tabela() {
  const [linha, setLinha] = useState<Order[]>([]);
  const [filtroTipo, setFiltroTipo] = useState<string>("id");
  const [filtroValor, setFiltroValor] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get<Order[]>("http://localhost:3000/ordens")
      .then((response) => {
        setLinha(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados da API:", error);
      });
  }, []);

  const filtrarDados = () => {
    if (filtroTipo === "id") {
      if (filtroValor.trim() === "") {
        return linha;
      } else {
        const filtroId = parseInt(filtroValor, 10);
        return linha.filter((item) => item.id === filtroId);
      }
    } else if (filtroTipo === "nome") {
      return linha.filter((item) =>
        item.nome.toLowerCase().includes(filtroValor.toLowerCase())
      );
    } else {
      return linha;
    }
  };

  return (
    <>
      <Container>
        <Filtro>
          <select
            value={filtroTipo}
            onChange={(e) => setFiltroTipo(e.target.value)}
          >
            <option value="id">Filtrar por ID</option>
            <option value="nome">Filtrar por Nome</option>
          </select>
          <input
            type="text"
            placeholder={
              filtroTipo === "id" ? "Filtrar por ID" : "Filtrar por Nome"
            }
            value={filtroValor}
            onChange={(e) => setFiltroValor(e.target.value)}
          />
        </Filtro>
        <PainelStyled>
          <table>
            <thead>
              <tr>
                <td>Codigo</td>
                <td>Nome</td>
                <td>Serviço</td>
                <td>Data</td>
                <td>Status</td>
              </tr>
            </thead>

            {filtrarDados().map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.plano}</td>
                  <td>{item.data}</td>
                  <td>{item.status}</td>
                  <td>
                    <Link to={`/servicoDetalhe/${item.id}`}>
                      <Button style="azulTranparente" text="ver detalhes" />
                    </Link>
                  </td>
                  <td>
                    <Button
                      style="verdeTranparente"
                      text="atender solicitação"
                      onClick={openModal}
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </PainelStyled>
        {isModalOpen && <Modal onClose={closeModal} />}
      </Container>
    </>
  );
}
