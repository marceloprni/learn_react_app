import React, { useState } from "react";
import { Input, Button } from "../../styles/form-styles";
import { DivPersonalizada } from "../../styles/geral-styles";
import "./index.css"
import InputText from "../../components/InputText";
import { login } from "../../service/usuarioService";
import { salvarTOken, salvarUsuario } from '../../utils/storage'
import Usuario from "../../models/Usuario";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const sendLogin= () => {
        login(email, senha).then((response) => {
            console.log(response)
            const {token, usuario} = response;
            salvarTOken(token)
            salvarUsuario(new Usuario(usuario))
            window.open("/", "_self")
        }).catch((error) => {

            console.log(error)
        })
    }
 
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
            callback={(e) =>  setEmail(e.target.value)}
        />
        {/* Senha */}
        <InputText 
            id="senha"
            holder=""
            text="Senha"
            type="password"
            callback={(e) =>  setSenha(e.target.value)}
        />


        <Button onClick={sendLogin}>Logar</Button>

        <div className="esqueci-senha">
            <a href="">Esqueci minha senha</a>
        </div>

    </DivPersonalizada>
        
  )
}

export default Login
