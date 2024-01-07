import { Container, List } from './styles'

import RestaurantCard from '../Restaurant'
import { Restaurant } from '../Restaurant'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
          ></RestaurantCard>
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
