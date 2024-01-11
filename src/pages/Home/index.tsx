import { useEffect, useState } from 'react'

import { Restaurant } from '../../components/Restaurant'
import RestaurantsList from '../../components/RestaurantsList'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      {restaurants ? (
        <RestaurantsList restaurants={restaurants} />
      ) : (
        <h3 className="container loading">Carregando...</h3>
      )}
    </>
  )
}

export default Home
