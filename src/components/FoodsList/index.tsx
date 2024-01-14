import FoodCard, { Food } from '../Food'
import { Restaurant } from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurant: Restaurant
  carregarModal: (food: Food) => void
}

const FoodsList = ({ restaurant, carregarModal }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.cardapio.map((food) => (
            <FoodCard key={food.id} food={food} carregarModal={carregarModal} />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default FoodsList
