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

type Props = {
  name: string
  description: string
  category: string
  infos: string[]
  evaluation: number
  image: string
}

const RestaurantCard = ({
  name,
  description,
  category,
  infos,
  evaluation,
  image
}: Props) => (
  <>
    <Card>
      <img src={image} alt={name} />
      <MainContent>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
          <Tag>{category}</Tag>
        </Infos>
        <LinhaConteudo>
          <Titulo>{name}</Titulo>
          <Nota>
            <span>{evaluation}</span>
            <img src={estrela} alt="" />
          </Nota>
        </LinhaConteudo>
        <Descricao>{description}</Descricao>
        <Button
          type="link"
          title="Acessar a página do restaturante"
          to="/perfil"
        >
          Saiba mais
        </Button>
      </MainContent>
    </Card>
  </>
)

export default RestaurantCard
