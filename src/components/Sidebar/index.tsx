import Button from '../Button'
import { CartContainer, Overlay, SidebarContainer } from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import Order from '../Order'
import Delivery from '../Delivery'
import Payment from '../Payment'

const Sidebar = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SidebarContainer>
        <Order />
        <Delivery />
        <Payment />
      </SidebarContainer>
    </CartContainer>
  )
}

export default Sidebar
