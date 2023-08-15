import styled from "styled-components";

export const Form = styled.form`
  width: 450px;
  background-color: #fff;
  padding: 40px 40px;
  margin: 50px 0;
  border: 1px solid #b4b4b4;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px grey;
  
  
  input {
    width: 100%;
    margin-bottom: 15px;
    margin-top: 10px;
    background-color: #F2F2F2;
    height: 33px;
    border-radius: 5px;
    border: none;
    padding: 13px;
  }

  label{
    font-weight: bold
  }
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;

  Button{
    margin: 0px 5px;
  }
`;
