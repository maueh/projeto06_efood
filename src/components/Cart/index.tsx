import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { remove, nextStage } from '../../store/reducers/cart'
import { formataPreco, getTotalPrice } from '../Order'
import Button from '../Button'
import IconButton from '../IconButton'
import excluir from '../../assets/images/lixeira-de-reciclagem.png'
import { CardFood } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const form = useFormik({
    initialValues: {
      receiversName: '',
      addressDelivery: '',
      cityDelivery: '',
      numberDelivery: '',
      cepDelivery: '',
      complementDelivery: '',
      nameCard: '',
      numberCard: '',
      codeCard: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: {
      receiversName: Yup.string().required('Campo obrigatório'),
      addressDelivery: Yup.string().required('Campo obrigatório'),
      numberCard: Yup.string()
        .required('Campo obrigatório')
        .length(12, 'O número do cartão precisa ter 12 dígitos')
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  if (!items.length) {
    return <h3>Nenhum item no carrinho</h3>
  }

  return (
    <>
      <ul>
        {items.map((foodItem) => {
          return (
            <CardFood key={foodItem.id}>
              <img className="food-image" src={foodItem.foto} alt="" />
              <div>
                <h3>{foodItem.nome}</h3>
                <p>{formataPreco(foodItem.preco)}</p>
                <IconButton
                  title={`Excluir ${foodItem.nome}`}
                  icone={excluir}
                  onClick={() => removeItem(foodItem.id)}
                />
              </div>
            </CardFood>
          )
        })}
      </ul>
      <p className="totalPrice">
        Valor total{' '}
        <span className="right">{formataPreco(getTotalPrice(items))}</span>
      </p>
      <Button
        type="button"
        title="Continuar com a entrega"
        onClick={() => dispatch(nextStage())}
      >
        Continuar com a entrega
      </Button>
    </>
  )
}

export default Cart
