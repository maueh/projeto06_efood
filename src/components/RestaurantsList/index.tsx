import { Container, List } from './styles'

import Restaurant from '../../models/Restaurant'
import RestaurantCard from '../Restaurant'

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
            name={restaurant.name}
            category={restaurant.category}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            evaluation={restaurant.evaluation}
          ></RestaurantCard>
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
