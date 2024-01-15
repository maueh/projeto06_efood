import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'
import Button from '../Button'
import IconButton from '../IconButton'
import fechar from '../../assets/images/close.png'
import * as S from './styles'

type Props = {
  food: Food
  handleModal: (isOpen: boolean) => void
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
      <S.PageContainer>
        <S.ModalContainer
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
              icon={fechar}
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
            >{`Adicionar ao carrinho - ${parseToBrl(food.preco)}`}</Button>
          </div>
        </S.ModalContainer>
      </S.PageContainer>
    </>
  )
}

export default Modal
