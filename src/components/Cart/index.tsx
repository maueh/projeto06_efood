import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { ShoppingStage, goToStage, remove } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

import Button from '../Button'
import IconButton from '../IconButton'
import iconRemove from '../../assets/images/lixeira-de-reciclagem.png'
import * as S from './styles'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  if (!items.length) {
    return <h3>Nenhum item no carrinho</h3>
  }

  return (
    <>
      <ul>
        {items.map((foodItem) => {
          return (
            <S.CardFood key={foodItem.id}>
              <img className="food-image" src={foodItem.foto} alt="" />
              <div>
                <h3>{foodItem.nome}</h3>
                <p>{parseToBrl(foodItem.preco)}</p>
                <IconButton
                  title={`Excluir ${foodItem.nome}`}
                  icon={iconRemove}
                  onClick={() => removeItem(foodItem.id)}
                />
              </div>
            </S.CardFood>
          )
        })}
      </ul>
      <p className="totalPrice">
        Valor total{' '}
        <span className="right">{parseToBrl(getTotalPrice(items))}</span>
      </p>
      <Button
        type="button"
        title="Continuar com a entrega"
        onClick={() => dispatch(goToStage(ShoppingStage.Delivery))}
      >
        Continuar com a entrega
      </Button>
    </>
  )
}

export default Cart
