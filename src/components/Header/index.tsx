import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { CabecalhoRestaurante, HeaderContainer, Topo } from './styles'

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
            <h1>
              <Link to="/">
                <img src={logo} alt="eFood" />
              </Link>
            </h1>

            {!paginaInicial && (
              <>
                <nav className="antecede">
                  <ul>
                    <li>
                      <Link to="/">Restaurantes</Link>
                    </li>
                  </ul>
                </nav>
                <div>
                  <p>0 produtos no carrinho</p>
                </div>
              </>
            )}
          </Topo>

          {paginaInicial && (
            <div className="container">
              <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
            </div>
          )}
        </div>
      </HeaderContainer>
      {!paginaInicial && (
        <CabecalhoRestaurante>
          <div className="container">
            <div>Categoria</div>
            <h2>Nome restaurante</h2>
          </div>
        </CabecalhoRestaurante>
      )}
    </>
  )
}
export default Header
