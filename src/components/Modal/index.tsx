import { useEffect, useRef, useState } from 'react'

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
  const modalRef = useRef<HTMLDialogElement>(null)
  /*
  useEffect(() => {
    console.log('Rodou de novo')
    modal = document.getElementById('food-modal') as HTMLDialogElement
  }, [food])*/

  /*
  useEffect(() => {
    console.log(`Em modal, food = ${food ? food.nome : food}`)
    console.log(modal)
    if (food) {
      console.log(
        `Deve abrir a modal - Food em modal = ${food ? food.nome : food}`
      )
      // modal ? modal.showModal() : null
      modalRef ? modalRef.current?.showModal() : null
    } else {
      console.log('Deve fechar a modal')
      // modal ? modal.close() : null
      if (modalRef) {
        console.log(modalRef)
        modalRef ? modalRef.current?.showModal() : null
        fecharModal()
        //modalRef.close()
      }
      handleModal(false)
    }
  })

  useEffect(() => {
    clicouEsc ? setClicouEsc(false) : null
    handleModal(false)
  }, [clicouEsc])

  useEffect(() => {
    console.log(i)
    if (food) console.log(food.nome)
    i += 1
  })
  */

  return (
    <>
      <PageContainer>
        <ModalContainer
          id="food-modal"
          className="container-dialog"
          ref={modalRef}
          open={false}
          onLoad={(e) => {
            e.currentTarget.showModal()
          }}
          onClose={(e) => {
            //Fecha a caixa ao teclar ESC
            handleModal(false)
          }}
        >
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
      </PageContainer>
    </>
  )
}

export default Modal
