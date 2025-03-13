import React from "react";
import "./index.css";
import { Link } from "react-router-dom"


export default class Principal extends React.Component {
    
    render() {
        return (
            <div className="principal">
                <h1>Hello, World!</h1>
                <Link to="/">Principal</Link> | <Link to="/detalhes">Detalhes</Link>
            </div>
        );
    }
}
