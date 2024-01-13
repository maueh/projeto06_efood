import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Food } from '../../components/Food'
import FoodsList from '../../components/FoodsList'
import { Restaurant } from '../../components/Restaurant'
import Modal from '../../components/Modal'
import HeaderPerfil from '../../components/HeaderPerfil'
import { useGetRestaurantDataQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurante } = useGetRestaurantDataQuery(id!)

  // const [restaurante, setRestaurante] = useState<Restaurant>()
  const [food, setFood] = useState<Food | null>()
  /*
  const [modalAberta, setModalAberta] = useState<boolean>(false)

  useEffect(() => {
    console.log(`Em Perfil, modal mudou para ${modalAberta}`)
  }, [modalAberta])*/

  /*
  //Carrega os dados do cardapio do restaurante com base no id
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])
*/

  useEffect(() => {
    console.log(`Em Perfil, food = ${food?.nome}`)
  }, [food])

  function carregarModal(food: Food) {
    console.log(`Set food para ${food.nome}`)
    setFood(food)
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
      {/* <Modal food={food} handleModal={handleModal} /> */}
    </>
  )
}

export default Perfil
