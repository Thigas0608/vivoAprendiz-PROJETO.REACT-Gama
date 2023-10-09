import styled from "styled-components";

export const Container = styled.main`
  margin: 50px;
`;

// Definindo o componente Filtro com estilos CSS
export const Filtro = styled.main`
  width: auto;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 4px 20px 0px #00000026;
  margin-bottom: 30px;

  select {
    width: 20%;
    margin-right: 2.5%;
    background-color: #f2f2f2;
    border-radius: 5px;
    border: none;
    padding: 8.5px;
  }

  input {
    width: 77.5%;
    background-color: #f2f2f2;
    height: 33px;
    border-radius: 5px;
    border: none;
    padding: 13px;
  }
`;

// Definindo o componente PainelStyled com estilos CSS
export const PainelStyled = styled.main`
  width: auto;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
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

