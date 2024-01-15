import { Restaurant } from '../Restaurant'
import { TextCase } from '../../styles'
import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const HeaderPerfil = ({ restaurant }: Props) => {
  return (
    <S.RestaurantHeader style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <div className={TextCase[TextCase.capitalize]}>{restaurant.tipo}</div>
        <h2>{restaurant.titulo}</h2>
      </div>
    </S.RestaurantHeader>
  )
}

export default HeaderPerfil
