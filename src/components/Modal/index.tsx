import { useEffect } from 'react'

import { Cardapio } from '../Food'
import fechar from '../../assets/images/close.png'
import Button from '../Button'
import { ModalContainer, PageContainer } from './styles'

type Props = {
  food: Cardapio
  handleModal: (estaAberta: boolean) => void
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ food, handleModal }: Props) => {
  let modal: HTMLDialogElement

  useEffect(() => {
    console.log('Rodou de novo')
    modal = document.getElementById('food-modal') as HTMLDialogElement
  }, [])

  useEffect(() => {
    console.log(`Em modal, food = ${food.nome}`)
    console.log(modal)
    if (food !== undefined) {
      // if (modal !== null) {
      //console.log(modal)
      console.log('Deve abrir a modal')
      modal.showModal()
      // }
    } /*else {
      if (modal !== null) {
        modal.close()
        handleModal(false)
        // setModalAberta(false)
      }
    }*/
  }, [])

  // document
  //   .getElementsByClassName('overlay')[0]
  //   ?.addEventListener('click', () => {
  //     console.log('backdrop?')
  //     handleModal(false)
  //     // console.log(modalAberta)
  //   })

  // document.getElementById('overlay')?.addEventListener('click', () => {
  //   console.log('backdrop?')
  //   handleModal(false)
  //   // console.log(modalAberta)
  // })

  return (
    <>
      <PageContainer>
        <ModalContainer id="food-modal" className="container-dialog">
          <img className="imgFood" src={food.foto} alt="" />
          <div>
            <h1>{food.nome}</h1>
            <button
              type="button"
              className="close"
              id="close"
              onClick={() => handleModal(false)}
              title={`Fechar caixa de detalhes de ${food.nome}`}
            >
              <img className="close2" src={fechar} alt="Fechar" />
            </button>
            <p>{food.descricao}</p>
            <p>Serve: de {food.porcao}</p>
            <Button
              type="button"
              title={`Adicionar ${food.nome} ao carrinho`}
              fullWidth={false}
            >{`Adicionar ao carrinho - ${formataPreco(food.preco)}`}</Button>
          </div>
        </ModalContainer>
        {/* <div
          id="overlay"
          className={food === null ? 'overlay' : 'overlay visivel'}
          onClick={() => handleModal(false)}
        ></div> */}
      </PageContainer>
    </>
  )
}

export default Modal
