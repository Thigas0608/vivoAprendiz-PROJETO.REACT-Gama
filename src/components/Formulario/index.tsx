import { useState } from "react";
import Button from "../Button";
import { Form, Container } from "./style";
import { serviceFuncionarios, LoginPayload } from "../../services/funcionarios";
import { useNavigate } from "react-router-dom"; // Importe useNavigate

export default function Formulario() {
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate para navegação

  const logar = async () => {
    try {
      const payload: LoginPayload = {
        codigo,
        senha,
      };

      // Chame a função de login do serviço e aguarde a resposta
      const response = await serviceFuncionarios.login(payload);

      // Verifique a resposta para determinar o sucesso do login
      if (response.status === 200) {
        // Sucesso no login
        console.log("Login bem-sucedido!");
        navigate("/servico"); // Use navigate para redirecionar
      } else {
        // Algum problema no login, exiba uma mensagem de erro
        setError("Falha no login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Ocorreu um erro ao fazer login.");
    }
  };

  const handleSubmit = (evento: { preventDefault: () => void; }) => {
    evento.preventDefault();

    // Chame a função assíncrona logar aqui
    void logar();
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label>Código de acesso</label>
          <input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          {error && <div style={{ color: "red" }}>{error}</div>}

          <Button style="azul" text="Entrar" />
        </Form>
      </Container>
    </>
  );
}
