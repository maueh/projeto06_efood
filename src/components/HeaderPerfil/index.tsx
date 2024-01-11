import { TextCase } from '../../styles'
import { Restaurant } from '../Restaurant'
import { CabecalhoRestaurante } from './styles'

type Props = {
  restaurante: Restaurant
}

const HeaderPerfil = ({ restaurante }: Props) => {
  return (
    <CabecalhoRestaurante
      style={{ backgroundImage: `url(${restaurante.capa})` }}
    >
      <div className="container">
        <div className={TextCase[TextCase.capitalize]}>{restaurante.tipo}</div>
        <h2>{restaurante.titulo}</h2>
      </div>
    </CabecalhoRestaurante>
  )
}

export default HeaderPerfil
