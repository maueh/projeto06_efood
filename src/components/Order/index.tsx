import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import {
  ShoppingStage,
  goToStage,
  cleanCart,
  setResetPurchase
} from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { getTotalPrice, parseToBrl } from '../../utils'
import Cart from '../Cart'
import Button from '../Button'
import * as S from './styles'
import Loader from '../Loader'
import InputMask from 'react-input-mask'

const Order = () => {
  const { items, tabStage, resetPurchase } = useSelector(
    (state: RootReducer) => state.cart
  )

  const [purchase, { isLoading, data, isSuccess, reset }] =
    usePurchaseMutation()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess && tabStage === ShoppingStage.Payment) {
      dispatch(goToStage(ShoppingStage.Completed))
      dispatch(cleanCart())
    }
  }, [isSuccess, tabStage, dispatch])

  useEffect(() => {
    console.log('Deveria resetar')
    if (resetPurchase) {
      console.log('Passou aqui')
      reset()
      dispatch(setResetPurchase(false))
    }
  }, [resetPurchase, reset, dispatch])

  const form = useFormik({
    initialValues: {
      receiversName: '',
      addressDelivery: '',
      cityDelivery: '',
      cepDelivery: '',
      numberDelivery: '',
      complementDelivery: '',
      nameCard: '',
      numberCard: '',
      codeCard: '',
      expireMonth: '',
      expireYear: ''
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

  const checkInputHasError = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    const hasError = isTouched && isInvalid
    return hasError
  }

  return (
    <S.Checkout>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          form.handleSubmit(e)
          isSuccess ? dispatch(goToStage(ShoppingStage.Cart)) : null
        }}
      >
        {tabStage === ShoppingStage.Cart ? <Cart /> : null}

        {tabStage === ShoppingStage.Delivery ? (
          <>
            <h3>Entrega</h3>
            <fieldset>
              <S.InputGroup>
                <label>Quem irá receber</label>
                <input
                  type="text"
                  name="receiversName"
                  id="receriversName"
                  value={form.values.receiversName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('receiversName') ? 'error' : ''}
                />
                <small>
                  {getErrorMessage('receiversName', form.errors.receiversName)}
                </small>
              </S.InputGroup>
              <S.InputGroup>
                <label>Endereço</label>
                <input
                  type="text"
                  name="addressDelivery"
                  id="addressDelivery"
                  value={form.values.addressDelivery}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('addressDelivery') ? 'error' : ''
                  }
                />
                <small>
                  {getErrorMessage(
                    'addressDelivery',
                    form.errors.addressDelivery
                  )}
                </small>
              </S.InputGroup>
              <S.InputGroup>
                <label>Cidade</label>
                <input
                  type="text"
                  name="cityDelivery"
                  id="cityDelivery"
                  value={form.values.cityDelivery}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cityDelivery') ? 'error' : ''}
                />
                <small>
                  {getErrorMessage('cityDelivery', form.errors.cityDelivery)}
                </small>
              </S.InputGroup>
              <div className="row">
                <S.InputGroup>
                  <label>CEP</label>
                  <InputMask
                    type="text"
                    name="cepDelivery"
                    id="cepDelivery"
                    value={form.values.cepDelivery}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    inputMode="numeric"
                    className={checkInputHasError('cepDelivery') ? 'error' : ''}
                    mask={'99999-999'}
                  />
                  <small>
                    {getErrorMessage('cepDelivery', form.errors.cepDelivery)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label>Número</label>
                  <input
                    type="text"
                    name="numberDelivery"
                    id="numberDelivery"
                    value={form.values.numberDelivery}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    inputMode="numeric"
                    className={
                      checkInputHasError('numberDelivery') ? 'error' : ''
                    }
                  />
                  <small>
                    {getErrorMessage(
                      'numberDelivery',
                      form.errors.numberDelivery
                    )}
                  </small>
                </S.InputGroup>
              </div>
              <S.InputGroup>
                <label>Complemento (opcional)</label>
                <input
                  type="text"
                  name="complementDelivery"
                  id="complementDelivery"
                  value={form.values.complementDelivery}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={
                    checkInputHasError('complementDelivery') ? 'error' : ''
                  }
                />
                <small>
                  {getErrorMessage(
                    'complementDelivery',
                    form.errors.complementDelivery
                  )}
                </small>
              </S.InputGroup>
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
              Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
            </h3>
            <fieldset>
              <S.InputGroup>
                <label>Nome no cartão</label>
                <input
                  type="text"
                  name="nameCard"
                  id="nameCard"
                  value={form.values.nameCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('nameCard') ? 'error' : ''}
                />
                <small>
                  {getErrorMessage('nameCard', form.errors.nameCard)}
                </small>
              </S.InputGroup>
              <div className="row fraction">
                <S.InputGroup>
                  <label>Número do cartão</label>
                  <InputMask
                    type="text"
                    name="numberCard"
                    id="numberCard"
                    value={form.values.numberCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('numberCard') ? 'error' : ''}
                    mask={'9999 9999 9999 9999'}
                  />
                  <small>
                    {getErrorMessage('numberCard', form.errors.numberCard)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label>CVV</label>
                  <InputMask
                    type="text"
                    name="codeCard"
                    id="codeCard"
                    value={form.values.codeCard}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('codeCard') ? 'error' : ''}
                    mask={'999'}
                  />
                  <small>
                    {getErrorMessage('codeCard', form.errors.codeCard)}
                  </small>
                </S.InputGroup>
              </div>
              <div className="row">
                <S.InputGroup>
                  <label>Mês de vencimento</label>
                  <InputMask
                    type="text"
                    name="expireMonth"
                    id="expireMonth"
                    value={form.values.expireMonth}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireMonth') ? 'error' : ''}
                    mask={'99'}
                    maskChar={''}
                    alwaysShowMask={true}
                  />
                  <small>
                    {getErrorMessage('expireMonth', form.errors.expireMonth)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label>Ano de vencimento</label>
                  <InputMask
                    type="text"
                    name="expireYear"
                    id="expireYear"
                    value={form.values.expireYear}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    className={checkInputHasError('expireYear') ? 'error' : ''}
                    mask={'9999'}
                  />
                  <small>
                    {getErrorMessage('expireYear', form.errors.expireYear)}
                  </small>
                </S.InputGroup>
              </div>
            </fieldset>
            <Button
              title="Finalizar pagamento"
              type="submit"
              onClick={form.handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Finalizar pagamento' : 'Finalizando pedido'}
            </Button>
            <Button
              title="Voltar para a edição de endereço"
              type="button"
              onClick={() => dispatch(goToStage(ShoppingStage.Delivery))}
              disabled={isLoading}
            >
              Voltar para a edição de endereço
            </Button>
          </>
        ) : null}

        {isLoading ? <Loader /> : null}

        {tabStage === ShoppingStage.Completed && data ? (
          <>
            <h3>Pedido realizado - {data.orderId}</h3>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </>
        ) : null}
      </form>
    </S.Checkout>
  )
}

export default Order
