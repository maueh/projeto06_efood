import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.png'
import { CartButton, HeaderContainer, Topo } from './styles'

export type Props = {
  paginaInicial: boolean
}

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  const { items } = useSelector((state: RootReducer) => state.cart)

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
                  <CartButton onClick={openCart}>
                    {items.length} produto(s) no carrinho
                  </CartButton>
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
