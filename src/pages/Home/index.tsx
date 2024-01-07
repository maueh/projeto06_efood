// import RestaurantCard from '../../components/Restaurant'
// import Restaurant from '../../models/Restaurant'

import imagem from '../../assets/images/imagem.png'
import imagem1 from '../../assets/images/imagem_1.png'
import { Restaurant } from '../../components/Restaurant'
import RestaurantsList from '../../components/RestaurantsList'
import { useEffect, useState } from 'react'

// const restaurante1 = new Restaurant(
//   1,
//   'Hioki Sushi ',
//   'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
//   'Japonesa',
//   ['Destaque da semana'],
//   4.9,
//   imagem
// )

// const restaurante2 = new Restaurant(
//   1,
//   'La Doce Vita Trattoria',
//   'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
//   'Italiana',
//   [],
//   4.6,
//   imagem1
// )

// const listaRestaurantes: Restaurant[] = []
// listaRestaurantes.push(restaurante1)
// listaRestaurantes.push(restaurante2)
// listaRestaurantes.push(restaurante2)
// listaRestaurantes.push(restaurante2)
// listaRestaurantes.push(restaurante2)
// listaRestaurantes.push(restaurante2)

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (!restaurants) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <RestaurantsList restaurants={restaurants} />
      {/* <RestaurantsList restaurants={listaRestaurantes} /> */}
      {/* <RestaurantCard
      name={restaurante.name}
      description={restaurante.description}
      category={restaurante.category}
      evaluation={restaurante.evaluation}
      infos={restaurante.infos}
      image={image}
      key={1}
    ></RestaurantCard> */}
    </>
  )
}

export default Home
