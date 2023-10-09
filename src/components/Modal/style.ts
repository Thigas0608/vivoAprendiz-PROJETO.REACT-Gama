// Em um arquivo de estilo separado ou diretamente no seu componente Modal.tsx

import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo escuro com transparência */
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    max-width: 400px;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }

    button {
      background-color: #007bff; /* Cor do botão */
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
