import Button from '../Button'
import InputGroup from '../InputGroup'
import { CheckoutContainer } from './styles'

const Delivery = () => {
  return (
    <>
      <CheckoutContainer>
        <h3>Entrega</h3>
        <form>
          <InputGroup
            label="Quem irá receber"
            type="text"
            htmlName="nomeRecebedor"
            required
          />

          <InputGroup
            label="Endereço"
            type="text"
            htmlName="enderecoEntrega"
            required
          />

          <InputGroup label="CEP" type="text" htmlName="cepEntrega" required />

          <InputGroup label="Número" type="number" htmlName="numeroEntrega" />

          <InputGroup label="CEP" type="text" htmlName="cepEntrega" required />

          <InputGroup
            label="Complemento (opcional)"
            type="text"
            htmlName="complementoEntrega"
          />

          <Button title="Continuar com o pagamento" type="button">
            Continuar com o pagamento
          </Button>

          <Button title="Voltar para o carrinho" type="button">
            Voltar para o carrinho
          </Button>
        </form>
      </CheckoutContainer>
    </>
  )
}

export default Delivery
