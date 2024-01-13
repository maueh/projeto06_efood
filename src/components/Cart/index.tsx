import Button from '../Button'
import { CardFood, CartContainer, Overlay, Sidebar } from './styles'
import excluir from '../../assets/images/lixeira-de-reciclagem.png'
import IconButton from '../IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../Modal'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((total, valorAtual) => {
      return (total += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((foodItem) => {
            return (
              <CardFood key={foodItem.id}>
                <img className="food-image" src={foodItem.foto} alt="" />
                <div>
                  <h3>{foodItem.nome}</h3>
                  <p>{formataPreco(foodItem.preco)}</p>
                  <IconButton
                    title={`Excluir ${foodItem.nome}`}
                    icone={excluir}
                    onClick={() => removeItem(foodItem.id)}
                  />
                </div>
              </CardFood>
            )
          })}
        </ul>
        <p className="totalPrice">
          Valor total{' '}
          <span className="right">{formataPreco(getTotalPrice())}</span>
        </p>
        <Button type="button" title="Continuar com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
