import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { ShoppingStage, goToStage, cleanCart } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import Cart from '../Cart'
import { Food } from '../Food'
import Button from '../Button'
import { Checkout, InputGroup } from './styles'

export const getTotalPrice = (itemsPedido: Food[]) => {
  return itemsPedido.reduce((total, valorAtual) => {
    return (total += valorAtual.preco)
  }, 0)
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Order = () => {
  const { items, tabStage } = useSelector((state: RootReducer) => state.cart)

  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess && tabStage === ShoppingStage.Payment) {
      dispatch(goToStage(ShoppingStage.Completed))
      dispatch(cleanCart())
    }
  }, [isSuccess, tabStage, dispatch])

  const form = useFormik({
    initialValues: {
      receiversName: 'Fulano',
      addressDelivery: 'Rua Otoni',
      cityDelivery: 'Limeira',
      cepDelivery: '01234-567',
      numberDelivery: '123',
      complementDelivery: 'ap1',
      nameCard: 'Fulano Nome Cartao',
      numberCard: '1234567891',
      codeCard: '111',
      expireMonth: '2',
      expireYear: '2025'
    },
    validationSchema: Yup.object({
      receiversName: Yup.string()
        .required('Campo obrigatório')
        .min(2, 'Precisa ter pelo menos 2 caracteres'),
      addressDelivery: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'Precisa ter pelo menos 3 caracteres'),
      cityDelivery: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'Precisa ter pelo menos 3 caracteres'),
      cepDelivery: Yup.string()
        .required('Campo obrigatório')
        .min(8, 'Mínimo 5 caracteres')
        .max(9, 'Máximo 9 caracteres'),
      numberDelivery: Yup.number()
        .required('Campo obrigatório')
        .typeError('Somente números'),
      nameCard: Yup.string()
        .required('Campo obrigatório')
        .min(2, 'Precisa ter pelo menos 2 caracteres'),
      numberCard: Yup.number()
        .required('Campo obrigatório')
        .typeError('Somente números'),
      codeCard: Yup.string()
        .required('Campo obrigatório')
        .min(3, 'O código precisa ter 3 dígitos')
        .max(3, 'O código precisa ter 3 dígitos'),
      expireMonth: Yup.number()
        .required('Campo obrigatório')
        .min(1, 'Mês inválido')
        .max(12, 'Mês inválido')
        .typeError('Somente números'),
      expireYear: Yup.number()
        .required('Campo obrigatório')
        .min(new Date().getFullYear(), 'Cartão vencido')
        .typeError('Somente números')
    }),
    onSubmit: (values) => {
      console.log(values)
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        })),
        delivery: {
          receiver: values.receiversName,
          address: {
            description: values.addressDelivery,
            city: values.cityDelivery,
            zipCode: values.cepDelivery,
            number: Number(values.numberDelivery),
            complement: values.complementDelivery
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: Number(values.codeCard),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldname: string, message?: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <Checkout>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit(e)
          isSuccess ? dispatch(goToStage(ShoppingStage.Cart)) : null
        }}
      >
        {tabStage === ShoppingStage.Cart ? <Cart /> : null}

        <form action="">
          {tabStage === ShoppingStage.Delivery ? (
            <>
              <h3>Entrega</h3>
              <fieldset>
                <InputGroup>
                  <label>Quem irá receber</label>
                  <input
                    type="text"
                    name="receiversName"
                    id="receriversName"
                    value={form.values.receiversName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'receiversName',
                      form.errors.receiversName
                    )}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label>Endereço</label>
                  <input
                    type="text"
                    name="addressDelivery"
                    id="addressDelivery"
                    value={form.values.addressDelivery}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'addressDelivery',
                      form.errors.addressDelivery
                    )}
                  </small>
                </InputGroup>
                <InputGroup>
                  <label>Cidade</label>
                  <input
                    type="text"
                    name="cityDelivery"
                    id="cityDelivery"
                    value={form.values.cityDelivery}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('cityDelivery', form.errors.cityDelivery)}
                  </small>
                </InputGroup>
                <div className="row">
                  <InputGroup>
                    <label>CEP</label>
                    <input
                      type="text"
                      name="cepDelivery"
                      id="cepDelivery"
                      value={form.values.cepDelivery}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      inputMode="numeric"
                    />
                    <small>
                      {getErrorMessage('cepDelivery', form.errors.cepDelivery)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label>Número</label>
                    <input
                      type="text"
                      name="numberDelivery"
                      id="numberDelivery"
                      value={form.values.numberDelivery}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      inputMode="numeric"
                    />
                    <small>
                      {getErrorMessage(
                        'numberDelivery',
                        form.errors.numberDelivery
                      )}
                    </small>
                  </InputGroup>
                </div>
                <InputGroup>
                  <label>Complemento (opcional)</label>
                  <input
                    type="text"
                    name="complementDelivery"
                    id="complementDelivery"
                    value={form.values.complementDelivery}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'complementDelivery',
                      form.errors.complementDelivery
                    )}
                  </small>
                </InputGroup>
              </fieldset>
              <Button
                title="Continuar com o pagamento"
                type="button"
                onClick={() => dispatch(goToStage(ShoppingStage.Payment))}
              >
                Continuar com o pagamento
              </Button>
              <Button
                title="Voltar para o carrinho"
                type="button"
                onClick={() => dispatch(goToStage(ShoppingStage.Cart))}
              >
                Voltar para o carrinho
              </Button>
            </>
          ) : null}

          {tabStage === ShoppingStage.Payment ? (
            <>
              <h3>
                Pagamento - Valor a pagar {formataPreco(getTotalPrice(items))}
              </h3>
              <fieldset>
                <InputGroup>
                  <label>Nome no cartão</label>
                  <input
                    type="text"
                    name="nameCard"
                    id="nameCard"
                    value={form.values.nameCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessage('nameCard', form.errors.nameCard)}
                  </small>
                </InputGroup>
                <div className="row fraction">
                  <InputGroup>
                    <label>Número do cartão</label>
                    <input
                      type="text"
                      name="numberCard"
                      id="numberCard"
                      value={form.values.numberCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('numberCard', form.errors.numberCard)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label>CVV</label>
                    <input
                      type="text"
                      name="codeCard"
                      id="codeCard"
                      value={form.values.codeCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('codeCard', form.errors.codeCard)}
                    </small>
                  </InputGroup>
                </div>
                <div className="row">
                  <InputGroup>
                    <label>Mês de vencimento</label>
                    <input
                      type="text"
                      name="expireMonth"
                      id="expireMonth"
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expireMonth', form.errors.expireMonth)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label>Ano de vencimento</label>
                    <input
                      type="text"
                      name="expireYear"
                      id="expireYear"
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>
                      {getErrorMessage('expireYear', form.errors.expireYear)}
                    </small>
                  </InputGroup>
                </div>
              </fieldset>
              <Button
                title="Finalizar pagamento"
                type="button"
                onClick={form.handleSubmit}
              >
                Finalizar pagamento
              </Button>
              <Button
                title="Voltar para a edição de endereço"
                type="button"
                onClick={() => dispatch(goToStage(ShoppingStage.Delivery))}
              >
                Voltar para a edição de endereço
              </Button>
            </>
          ) : null}

          {tabStage === ShoppingStage.Completed ? (
            <>
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
            </>
          ) : null}
        </form>
      </form>
    </Checkout>
  )
}

export default Order
