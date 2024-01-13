import Button from '../Button'
import { CardFood, CartContainer, Overlay, Sidebar } from './styles'
import excluir from '../../assets/images/lixeira-de-reciclagem.png'
import imagem from '../../assets/images/prato_1.png'
import IconButton from '../IconButton'

const Cart = () => {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CardFood>
            <img className="food-image" src={imagem} alt="" />
            <div>
              <h3>Nome do prato lorem ipsum dolor sit amet</h3>
              <p>R$ 60,00</p>
              <IconButton title="Excluir" icone={excluir} />
            </div>
          </CardFood>
          <CardFood>
            <img className="food-image" src={imagem} alt="" />
            <div>
              <h3>Nome do prato</h3>
              <p>R$ 60,00</p>
              <IconButton title="Excluir" icone={excluir} />
            </div>
          </CardFood>
          <CardFood>
            <img className="food-image" src={imagem} alt="" />
            <div>
              <h3>Nome do prato</h3>
              <p>R$ 60,00</p>
              <IconButton title="Excluir" icone={excluir} />
            </div>
          </CardFood>
        </ul>
        <p className="totalPrice">
          Valor total <span className="right">R$ 182,00</span>
        </p>
        <Button type="button" title="Continuar com a entrega">
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
