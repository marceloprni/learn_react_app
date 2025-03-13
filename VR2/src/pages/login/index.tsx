import React from "react";
import { Input, Button } from "../../styles/form-styles";
import { DivPersonalizada } from "../../styles/geral-styles";
import "./index.css"
import InputText from "../../components/InputText";

const Login = () => {
  return (
    <DivPersonalizada 
        width="350px" 
        margin="auto" 
        border="1px solid #ddd" 
        marginTop="50px"
        borderRadius="5px"
    >   
        <div className="logo">
            <h1>Login</h1>
        </div>

        {/* Email */}
        <InputText 
            id="email"
            holder="exemplo@exemplo.com"
            text="E-mail"
        />
        {/* Senha */}
        <InputText 
            id="senha"
            holder=""
            text="Senha"
        />


        <Button>Logar</Button>

        <div className="esqueci-senha">
            <a href="">Esqueci minha senha</a>
        </div>

    </DivPersonalizada>
        
  )
}

export default Login
