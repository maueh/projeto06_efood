import RestaurantsList from '../../components/RestaurantsList'
import { useGetAllRestaurantsDataQuery } from '../../services/api'

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
