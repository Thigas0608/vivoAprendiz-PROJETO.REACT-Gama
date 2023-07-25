import { useState, FormEventHandler } from "react";
import Button from "../Button";
import { Form, Container } from "./style";



export default function Formulario() {
  const[codigo, setCodigo] = useState("");
  const[senha, setSenha] = useState("");

const logar: FormEventHandler<HTMLFormElement> =(evento) =>{
evento.preventDefault();
// pra ver o que vem no parametro de evento
console.log(evento);

// 
console.log(codigo);
console.log(senha);
}

  return (
    <>
      <Container>
        <Form onSubmit={logar}>
          <label>Código de acesso</label>
          <input 
          type="text"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          />


          <label>Senha</label>
          <input
          type="password"
          value={senha}
          onChange={(e)=> setSenha(e.target.value)}
          />

          <Button text="entrar" />
        </Form>
      </Container>
    </>
  );
}
