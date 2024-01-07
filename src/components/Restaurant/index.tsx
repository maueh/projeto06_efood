import Tag from '../Tag'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  MainContent,
  Nota,
  LinhaConteudo
} from './styles'

import estrela from '../../assets/images/estrela.png'
import Button from '../Button'
import { Cardapio } from '../Food'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

type Props = {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => (
  <>
    <Card>
      <img src={restaurant.capa} alt={restaurant.titulo} />

      <MainContent>
        <Infos>
          {restaurant.destacado && <Tag key="destaque">Destaque da semana</Tag>}
          <Tag>{restaurant.tipo}</Tag>
        </Infos>
        <LinhaConteudo>
          <Titulo>{restaurant.titulo}</Titulo>
          <Nota>
            <span>{restaurant.avaliacao}</span>
            <img src={estrela} alt="" />
          </Nota>
        </LinhaConteudo>
        <Descricao>{restaurant.descricao}</Descricao>
        <Button
          type="link"
          title="Acessar a página do restaturante"
          to={`/perfil/${restaurant.id}`}
        >
          Saiba mais
        </Button>
      </MainContent>
    </Card>
  </>
)

export default RestaurantCard
