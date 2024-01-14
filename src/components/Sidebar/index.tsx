import { useDispatch, useSelector } from 'react-redux'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { ShoppingStage, close, goToStage } from '../../store/reducers/cart'
import Order from '../Order'
import { CartContainer, Overlay, SidebarContainer } from './styles'

const Sidebar = () => {
  const { isOpen, tabStage } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { reset }] = usePurchaseMutation()

  const dispatch = useDispatch()
  const closeSidebar = () => {
    dispatch(close())
    dispatch(goToStage(ShoppingStage.Cart))
    if (tabStage === ShoppingStage.Completed) {
      reset()
    }
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeSidebar} />
      <SidebarContainer>
        <Order />
      </SidebarContainer>
    </CartContainer>
  )
}

export default Sidebar
