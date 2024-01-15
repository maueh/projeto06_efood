import Tag from '../Tag'
import Button from '../Button'
import { Food } from '../Food'
import estrela from '../../assets/images/estrela.png'
import { TextCase } from '../../styles'
import * as S from './styles'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Food[]
}

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => (
  <>
    <S.Card>
      <img src={restaurant.capa} alt={restaurant.titulo} />

      <S.MainContent>
        <S.Infos>
          {restaurant.destacado && <Tag key="destaque">Destaque da semana</Tag>}
          <Tag textCase={TextCase.capitalize}>{restaurant.tipo}</Tag>
        </S.Infos>
        <S.Row>
          <S.Title>{restaurant.titulo}</S.Title>
          <S.Rating>
            <span>{restaurant.avaliacao}</span>
            <img src={estrela} alt="" />
          </S.Rating>
        </S.Row>
        <S.Description>{restaurant.descricao}</S.Description>
        <Button
          type="link"
          title={`Acessar a página de ${restaurant.titulo}`}
          to={`/perfil/${restaurant.id}`}
        >
          Saiba mais
        </Button>
      </S.MainContent>
    </S.Card>
  </>
)

export default RestaurantCard
