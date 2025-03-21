import React, { useEffect} from "react";
import "./index.css";
import { Link } from "react-router-dom"
import { obterToken } from "../../utils/storage";


const Principal = () => {

        useEffect(() => {
            const token = obterToken();

            if(!token) {
                window.open("/login", "_self");
            }
        })
   
        return (
            <div className="principal">
                <h1>Hello, World!</h1>
                <Link to="/">Principal</Link> | <Link to="/detalhes">Detalhes</Link>
            </div>
        );
}

export default Principal;