import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { previousStage, nextStage } from '../../store/reducers/cart'
import Button from '../Button'
import InputGroup from '../InputGroup'
import { CheckoutContainer } from './styles'

const Delivery = () => {
  const dispatch = useDispatch()

  const getErrorMessage = (fieldname: string, message?: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    if (isTouched && isInvalid) return message
    return ''
  }

  const form = useFormik({
    initialValues: {
      receiversName: '1',
      addressDelivery: '',
      cityDelivery: '',
      numberDelivery: '',
      cepDelivery: '',
      complementDelivery: ''
    },
    validationSchema: Yup.object({
      receiversName: Yup.number()
        .min(2, 'Precisar ter pelo menos 2 caracteres')
        .max(5, 'máximo 5 char')
        .required('obrigatorio'),
      addressDelivery: Yup.string().min(
        2,
        'Precisar ter pelo menos 2 caracteres'
      ),
      cityDelivery: Yup.string().min(2, 'Precisar ter pelo menos 2 caracteres'),
      numberDelivery: Yup.number().min(1, 'Precisa'),
      cepDelivery: Yup.string().min(8, 'Precisar ter pelo menos 8 caracteres'),
      complementDelivery: Yup.string()
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  // consosle.log(form)

  return (
    <>
      <CheckoutContainer>
        <h3>Entrega</h3>
        <form>
          <label>adfs</label>
          <input
            type="text"
            name="receiversName"
            id="receriversName"
            value={form.values.receiversName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <small>
            {getErrorMessage('receiversName', form.errors.receiversName)}
          </small>

          <InputGroup
            label="Quem irá receber"
            type="text"
            htmlName="receiversName"
            required
            value={form.values.receiversName}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />

          <InputGroup
            label="Endereço"
            type="text"
            htmlName="addressDelivery"
            required
            onChange={form.handleChange}
          />

          <InputGroup
            label="Cidade"
            type="text"
            htmlName="cityDelivery"
            required
          />

          <InputGroup label="Número" type="number" htmlName="numberDelivery" />

          <InputGroup label="CEP" type="text" htmlName="cepDelivery" required />

          <InputGroup
            label="Complemento (opcional)"
            type="text"
            htmlName="complementDelivery"
          />

          <Button
            title="Continuar com o pagamento"
            type="button"
            onClick={() => dispatch(nextStage())}
          >
            Continuar com o pagamento
          </Button>

          <Button
            title="Voltar para o carrinho"
            type="button"
            onClick={() => dispatch(previousStage())}
          >
            Voltar para o carrinho
          </Button>
        </form>
      </CheckoutContainer>
    </>
  )
}

export default Delivery
