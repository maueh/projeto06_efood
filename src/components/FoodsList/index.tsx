import { Container, List } from './styles'

import Food from '../../models/Food'
import FoodCard from '../Food'

export type Props = {
  foods: Food[]
}

const FoodsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            description={food.description}
            image={food.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default FoodsList
