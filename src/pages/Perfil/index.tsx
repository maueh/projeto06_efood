import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Cardapio } from '../../components/Food'
import FoodsList from '../../components/FoodsList'
import { Restaurant } from '../../components/Restaurant'
import Modal from '../../components/Modal'
import HeaderPerfil from '../../components/HeaderPerfil'

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurant>()
  const [food, setFood] = useState<Cardapio | null>()
  /*
  const [modalAberta, setModalAberta] = useState<boolean>(false)

  useEffect(() => {
    console.log(`Em Perfil, modal mudou para ${modalAberta}`)
  }, [modalAberta])*/

  //Carrega os dados do cardapio do restaurante com base no id
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  useEffect(() => {
    console.log(`Em Perfil, food = ${food?.nome}`)
  }, [food])

  function carregarModal(cardapio: Cardapio) {
    console.log(`Chamando modal para ${cardapio.nome}`)
    setFood(cardapio)
    //setModalAberta(true)
  }

  function handleModal(estaAberta: boolean) {
    console.log(`Chamada de handleModal`)
    //setModalAberta(estaAberta)
    if (!estaAberta) {
      setFood(null)
    }
  }

  //Exibe mensagem de carregamento da API
  if (!restaurante) {
    return <h3 className="container loading">Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil restaurante={restaurante} />
      <FoodsList restaurant={restaurante} carregarModal={carregarModal} />
      {food ? <Modal food={food} handleModal={handleModal} /> : null}
    </>
  )
}

export default Perfil
