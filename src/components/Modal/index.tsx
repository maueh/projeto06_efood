import Food from '../../models/Food'
import Restaurant from '../../models/Restaurant'
import { ModalContainer } from './styles'
import imagem from '../../assets/images/imagem_1.png'
import fechar from '../../assets/images/close.png'
import Button from '../Button'

// type Props = {}

const Modal = () => {
  return (
    <>
      <ModalContainer>
        <img className="imgFood" src={imagem} alt="" />
        <h1>Título</h1>
        <img className="close" src={fechar} alt="Fechar" />
        <p>descrição</p>
        <p>Serve: de 2 a 3 pessoas</p>
      </ModalContainer>
    </>
  )
}

export default Modal
