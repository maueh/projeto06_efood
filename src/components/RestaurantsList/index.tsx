import RestaurantCard from '../Restaurant'
import { Restaurant } from '../Restaurant'
import * as S from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <S.Container>
    <div className="container">
      <S.List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          ></RestaurantCard>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default RestaurantsList
