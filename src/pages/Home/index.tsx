import { useGetAllRestaurantsDataQuery } from '../../services/api'
import RestaurantsList from '../../components/RestaurantsList'

const Home = () => {
  const { data: restaurants, isLoading } = useGetAllRestaurantsDataQuery()

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
