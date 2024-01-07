import { Container, List } from './styles'

import Food from '../../models/Food'
import FoodCard, { Cardapio } from '../Food'
import { Restaurant } from '../Restaurant'

export type Props = {
  restaurant: Restaurant
}

const FoodsList = ({ restaurant }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.cardapio.map((food) => (
            <FoodCard
              key={food.id}
              name={food.nome}
              description={food.descricao}
              image={food.foto}
              cardapio={food}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default FoodsList
