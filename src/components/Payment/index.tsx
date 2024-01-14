import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { previousStage } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../Order'
import Button from '../Button'
import InputGroup from '../InputGroup'

const Payment = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      nameCard: '',
      numberCard: '',
      codeCard: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: {
      numberCard: Yup.string()
        .required('Campo obrigatório')
        .length(12, 'O número do cartão precisa ter 12 dígitos')
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
      <h3>Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}</h3>
      <form>
        <InputGroup
          label="Nome no cartão"
          htmlName="nameCard"
          type="text"
          required
          value={form.values.nameCard}
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
        <Button
          title="Voltar para a edição de endereço"
          type="button"
          onClick={() => dispatch(previousStage())}
        >
          Voltar para a edição de endereço
        </Button>

        <h3>Pedido realizado - {`dfgsdfg`}</h3>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
      </form>
    </>
  )
}

export default Payment
