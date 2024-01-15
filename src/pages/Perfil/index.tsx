import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Food } from '../../components/Food'
import FoodsList from '../../components/FoodsList'
import Modal from '../../components/Modal'
import HeaderPerfil from '../../components/HeaderPerfil'
import { useGetRestaurantDataQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantDataQuery(id!)

  const [food, setFood] = useState<Food | null>()

  useEffect(() => {
    console.log(`Em Perfil, food = ${food?.nome}`)
  }, [food])

  function loadModal(food: Food) {
    console.log(`Set food para ${food.nome}`)
    setFood(food)
  }

  function handleModal(isOpen: boolean) {
    console.log(`Chamada de handleModal`)
    if (!isOpen) {
      setFood(null)
    }
  }

  //Exibe mensagem de carregamento da API
  if (!restaurant) {
    return <h3 className="container loading">Carregando...</h3>
  }

  return (
    <>
      <HeaderPerfil restaurant={restaurant} />
      <FoodsList restaurant={restaurant} loadModal={loadModal} />
      {food ? <Modal food={food} handleModal={handleModal} /> : null}
    </>
  )
}

export default Perfil
