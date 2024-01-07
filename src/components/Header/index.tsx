import { Link, useLocation, useParams } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { CabecalhoRestaurante, HeaderContainer, Topo } from './styles'
import { useEffect, useState } from 'react'
import { Restaurant } from '../Restaurant'

export type Props = {
  paginaInicial: boolean
}

const Header = () => {
  const location = useLocation()
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

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
        <CabecalhoRestaurante
          style={{ backgroundImage: `url(${restaurante.capa})` }}
        >
          <div className="container">
            <div>{restaurante.tipo}</div>
            <h2>{restaurante.titulo}</h2>
          </div>
        </CabecalhoRestaurante>
      )}
    </>
  )
}
export default Header
