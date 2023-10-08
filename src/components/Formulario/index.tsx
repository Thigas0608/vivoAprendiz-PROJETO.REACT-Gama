import React, { useState } from "react";
import Button from "../Button";
import { Form, Container } from "./style";
import { serviceFuncionarios, LoginPayload } from "../../services/funcionarios";
import { useNavigate } from "react-router-dom";

// Importe os ícones ou coloque os SVGs aqui
import EyeIconOpen from "../../assets/OpenPadlock.png";
import EyeIconClosed from "../../assets/ClosedPadlock.png";

export default function Formulario() {
  const [codigo, setCodigo] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const logar = async () => {
    try {
      const payload: LoginPayload = {
        codigo,
        senha,
      };

      const response = await serviceFuncionarios.login(payload);

      if (response.status === 200) {
        console.log("Login bem-sucedido!");
        navigate("/servico");
      } else {
        setError("Falha no login. Verifique suas credenciais.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Ocorreu um erro ao fazer login.");
    }
  };

  const handleSubmit = (evento: { preventDefault: () => void; }) => {
    evento.preventDefault();
    void logar();
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={{
                paddingRight: "35px", // Espaço à direita para o ícone
              }}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                width: "35px", // Largura do ícone
                height: "30px", // Altura do ícone
              }}
            >
              {showPassword ? (
                <img
                  src={EyeIconOpen}
                  alt="Ocultar senha"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : (
                <img
                  src={EyeIconClosed}
                  alt="Mostrar senha"
                  style={{ width: "100%", height: "100%" }}
                />
              )}
            </button>
          </div>

          {error && <div style={{ color: "red" }}>{error}</div>}

          <Button style="azul" text="Entrar" />
        </Form>
      </Container>
    </>
  );
}
