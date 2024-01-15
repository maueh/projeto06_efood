import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

export type Props = {
  initialPage: boolean
}

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }
  const { items } = useSelector((state: RootReducer) => state.cart)

  const initialPage = location.pathname === '/' ? true : false

  return (
    <>
      <S.HeaderContainer>
        <div className="container">
          <S.Topo>
            <h1 className="distribute">
              <Link to="/">
                <img src={logo} alt="eFood" />
              </Link>
            </h1>

            {!initialPage ? (
              <>
                <nav className="precede distribute flex-start">
                  <ul>
                    <li>
                      <Link to="/">Restaurantes</Link>
                    </li>
                  </ul>
                </nav>
                <div className="distribute flex-end">
                  <S.CartButton onClick={openCart}>
                    {items.length} produto(s) no carrinho
                  </S.CartButton>
                </div>
              </>
            ) : null}
          </S.Topo>

          {initialPage ? (
            <div className="container">
              <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
            </div>
          ) : null}
        </div>
      </S.HeaderContainer>
    </>
  )
}
export default Header
