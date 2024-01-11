import { Container, List } from './styles'

import Food from '../../models/Food'
import FoodCard, { Cardapio } from '../Food'
import { Restaurant } from '../Restaurant'

export type Props = {
  restaurant: Restaurant
  carregarModal: (cardapio: Cardapio) => void
}

const FoodsList = ({ restaurant, carregarModal }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {restaurant.cardapio.map((food) => (
            <FoodCard
              key={food.id}
              // name={food.nome}
              // description={food.descricao}
              // image={food.foto}
              cardapio={food}
              carregarModal={carregarModal}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default FoodsList
