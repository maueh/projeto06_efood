import { useGetAllRestaurantsDataQuery } from '../../services/api'
import RestaurantsList from '../../components/RestaurantsList'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants, isLoading } = useGetAllRestaurantsDataQuery()

  if (isLoading) {
    return <Loader></Loader>
  }

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
