import Button from '../Button'
import InputGroup from '../InputGroup'

const Payment = () => {
  return (
    <>
      <h3>Pagamento - Valor a pagar {`R$`}</h3>
      <form>
        <InputGroup
          label="Nome no cartão"
          htmlName="nameCard"
          type="text"
          required
        />
        <InputGroup
          label="Número do cartão"
          htmlName="numberCard"
          type="number"
          required
        />
        <InputGroup label="CVV" htmlName="codeCard" type="number" required />
        <InputGroup
          label="Mês de vencimento"
          htmlName="expireMonth"
          type="number"
          required
        />
        <InputGroup
          label="Ano de vencimento"
          htmlName="expireYear"
          type="number"
          required
        />
        <Button title="Finalizar pagamento" type="button">
          Finalizar pagamento
        </Button>
        <Button title="Voltar para a ediçào de endereço" type="button">
          Voltar para a edição de endereço
        </Button>
        <h3>Pedido realizado - XPTO</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras. Lembre-se da importância de higienizar as
          mãos após o recebimento do pedido, garantindo assim sua segurança e
          bem-estar durante a refeição. Esperamos que desfrute de uma deliciosa
          e agradável experiência gastronômica. Bom apetite!
        </p>
      </form>
    </>
  )
}

export default Payment
