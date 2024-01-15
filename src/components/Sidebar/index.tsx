import { useDispatch, useSelector } from 'react-redux'

import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { ShoppingStage, close, goToStage } from '../../store/reducers/cart'
import Order from '../Order'
import * as S from './styles'

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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeSidebar} />
      <S.SidebarContainer>
        <Order />
      </S.SidebarContainer>
    </S.CartContainer>
  )
}

export default Sidebar
