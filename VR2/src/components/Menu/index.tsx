import React from 'react'
import { NavBarPrincipal } from '../../styles/geral-styles'
import { Link, useLocation } from 'react-router-dom'
import { removerAutenticacao } from '../../utils/storage'

const Menu = () => {

    const logout = () => {
        removerAutenticacao()
        window.open("/login", "_self")
    }

  if(useLocation().pathname != "/login") {
    return (
      <NavBarPrincipal>
        
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/contato'}>Contato</Link></li>
          <li><Link to={'/sobre'}>Sobre</Link></li>
          <li><a href="#" onClick={logout}>Sair</a></li>
        
      </NavBarPrincipal>
    )
  } else {
      return (
        <div></div>
      )
  }
  
}

export default Menu
