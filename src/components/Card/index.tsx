import Food from '../../models/Food'
import Restaurant from '../../models/Restaurant'
import { RestaurantCard } from './styles'
import imagem from '../../assets/images/imagem_1.png'
import Button from '../Button'

type Props = {
  content: Restaurant | Food
}

const Card = ({ content }: Props) => {
  if (content instanceof Restaurant) {
    const { name, description, evaluation, image } = content as Restaurant
    return (
      <>
        <RestaurantCard>
          <div style={{ backgroundImage: `url(${imagem})` }}></div>
          <h1>{name}</h1>
          <span>{evaluation}</span>
          <p>{description}</p>
          <Button type="link" title="Acessar a página do restaturante" to="/">
            Saiba mais
          </Button>
        </RestaurantCard>
      </>
    )
  }

  return <h1>Food</h1>
}

export default Card
