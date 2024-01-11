import { Link, useLocation, useParams } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, Topo } from './styles'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Restaurant'

export type Props = {
  paginaInicial: boolean
}

const Header = () => {
  const location = useLocation()

  const paginaInicial = location.pathname === '/' ? true : false

  return (
    <>
      <HeaderContainer>
        <div className="container">
          <Topo>
            <h1 className="distribute">
              <Link to="/">
                <img src={logo} alt="eFood" />
              </Link>
            </h1>

            {!paginaInicial ? (
              <>
                <nav className="antecede distribute flex-start">
                  <ul>
                    <li>
                      <Link to="/">Restaurantes</Link>
                    </li>
                  </ul>
                </nav>
                <div className="distribute flex-end">
                  <p>0 produtos no carrinho</p>
                </div>
              </>
            ) : null}
          </Topo>

          {paginaInicial ? (
            <div className="container">
              <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
            </div>
          ) : null}
        </div>
      </HeaderContainer>
    </>
  )
}
export default Header
