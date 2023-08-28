import styled from "styled-components";

export const Form = styled.form`
  width: 450px;
  background-color: #fff;
  padding: 30px 35px;
  margin: 50px 0;
  border: 1px solid #b4b4b4;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 0px grey;

  label {
    font-weight: bold;
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    margin-top: 10px;
    height: 33px;
    border-radius: 5px;
    padding: 13px;
    border: 1px solid;
  }
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
`;
