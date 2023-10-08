import styled from "styled-components";

// Definindo o componente PainelStyled com estilos CSS
export const PainelStyled = styled.main`
  width: auto;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  margin: 50px;
  box-shadow: 0px 4px 20px 0px #00000026;

  // Estilos para as tabelas e suas células
  tr {
    width: 100%;
  }

  td, tr {
    padding: 10px;
    text-align: center;
    border-bottom: 1.6px solid #b4b4b4;
  }

  td{
    font-weight: lighter;
  }

  table{
    width: 100%;
    text-align: center;
    border-collapse: collapse;
  }
`;