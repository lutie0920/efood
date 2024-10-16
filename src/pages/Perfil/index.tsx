import MenuList from '../../components/MenuList'
import Header from '../../components/Header'
import Cardapio from '../../models/Cardapio'

import marguerita from '../../assets/images/pizza.jpg'

const pizza: Cardapio[] = [
  {
    id: 1,
    image: marguerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: marguerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: marguerita,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => (
  <>
    <Header />
    <div className="container">
      <MenuList menu={pizza} />
      <MenuList menu={pizza} />
    </div>
  </>
)

export default Perfil
