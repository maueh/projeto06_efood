import { Food } from '../Food'
import fechar from '../../assets/images/close.png'
import Button from '../Button'
import { ModalContainer, PageContainer } from './styles'
import IconButton from '../IconButton'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  food: Food
  handleModal: (estaAberta: boolean) => void
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ food, handleModal }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(food))
    dispatch(open())
    handleModal(false)
  }

  return (
    <>
      <PageContainer>
        <ModalContainer
          id="food-modal"
          className="container-dialog2"
          open={false}
          onLoad={(e) => {
            //Abre a modal com o fundo
            e.currentTarget.showModal()
          }}
          onClose={() => {
            //Fecha a caixa ao teclar ESC
            handleModal(false)
          }}
        >
          <img className="imgFood" src={food.foto} alt="" />
          <div>
            <h1>{food.nome}</h1>

            <IconButton
              icone={fechar}
              title={`Fechar caixa de detalhes de ${food.nome}`}
              onClick={() => handleModal(false)}
            />
            <p>{food.descricao}</p>
            <p>Serve: de {food.porcao}</p>
            <Button
              type="button"
              title={`Adicionar ${food.nome} ao carrinho`}
              fullWidth={false}
              onClick={addToCart}
            >{`Adicionar ao carrinho - ${formataPreco(food.preco)}`}</Button>
          </div>
        </ModalContainer>
      </PageContainer>
    </>
  )
}

export default Modal
