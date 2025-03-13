import React from 'react'
import { NavBarPrincipal } from '../../styles/geral-styles'
import { Link } from 'react-router-dom'

const Menu = () => {

    const logout = () => {
        // Implementar logout aqui
        console.log('Saindo...')
    }

  return (
    <NavBarPrincipal>
      
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contato'}>Contato</Link></li>
        <li><Link to={'/sobre'}>Sobre</Link></li>
        <li><a href="#" onClick={logout}>Sair</a></li>
      
    </NavBarPrincipal>
  )
}

export default Menu
