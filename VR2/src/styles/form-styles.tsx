import styled from "styled-components";

const Input = styled.input`
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0px;
      display: inline-block;
      border: 1px solid #ddd;
      outline: none;
      border-radius: 4px;
      box-sizing: border-box;
`;

/* ESTA ERDANDO TODOS OS COMPONENTES INPUT */
//const Select = styled(InputText);

const Button = styled.button`
    width: 100%;
    background-color: #a3366c;
    color: #fff;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #b6487c;
    }
`;


export {
    Input,
    Button
}