// import RestaurantCard from '../../components/Restaurant'
// import Restaurant from '../../models/Restaurant'

import imagemPrato from '../../assets/images/imagem_3.png'
import FoodsList from '../../components/FoodsList'
import Food from '../../models/Food'

const prato = new Food(
  1,
  'La Doce Vita Trattoria',
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
  'Italiana',
  123.45,
  imagemPrato
)

const listaPratos: Food[] = []
listaPratos.push(prato)
listaPratos.push(prato)
listaPratos.push(prato)
listaPratos.push(prato)

const Perfil = () => (
  <>
    <FoodsList foods={listaPratos} />
  </>
)

export default Perfil
