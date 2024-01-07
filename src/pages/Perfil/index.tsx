import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import imagemPrato from '../../assets/images/imagem_3.png'
import FoodsList from '../../components/FoodsList'
// import Food from '../../models/Food'
// import Modal from '../../components/Modal'
import { Restaurant } from '../../components/Restaurant'

// const prato = new Food(
//   1,
//   'La Doce Vita Trattoria',
//   'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//   'Italiana',
//   123.45,
//   imagemPrato
// )

// const listaPratos: Food[] = []
// listaPratos.push(prato)
// listaPratos.push(prato)
// listaPratos.push(prato)
// listaPratos.push(prato)

const Perfil = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      {/* <h3>{` Olá ${useParams().id}`}</h3> */}
      <FoodsList restaurant={restaurante} />
      {/* <Modal /> */}
    </>
  )
}
export default Perfil
