import { Food } from '../Food'
import fechar from '../../assets/images/close.png'
import Button from '../Button'
import { ModalContainer, PageContainer } from './styles'
import IconButton from '../IconButton'

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
  return (
    <>
      <PageContainer>
        <ModalContainer
          id="food-modal"
          className="container-dialog"
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
            {/*
            <button
              type="button"
              className="close"
              id="close"
              onClick={() => handleModal(false)}
              title={`Fechar caixa de detalhes de ${food.nome}`}
            >
              <img className="close2" src={fechar} alt="Fechar" />
        </button>*/}
            <p>{food.descricao}</p>
            <p>Serve: de {food.porcao}</p>
            <Button
              type="button"
              title={`Adicionar ${food.nome} ao carrinho`}
              fullWidth={false}
            >{`Adicionar ao carrinho - ${formataPreco(food.preco)}`}</Button>
          </div>
        </ModalContainer>
      </PageContainer>
    </>
  )
}

export default Modal
