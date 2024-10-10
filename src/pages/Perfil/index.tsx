import MenuList from '../../components/MenuList'
import Header from '../../components/Header'
import Cardapio from '../../models/Cardapio'

import marguerita from '../../assets/images/pizza.jpg'
import close from '../../assets/images/close.png'
import Button from '../../components/Button'
import { ImgClose, ImgPizza, Modal, ModalContent } from './styles'

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
    <Modal>
      <ModalContent className="container">
        <ImgPizza src={marguerita} alt="imagem da pizza marguerita" />
        <div>
          <h4>Pizza Marguerita</h4>
          <p>
            A pizza Margherita é uma pizza clássica da culinária italiana,
            reconhecida por sua simplicidade e sabor inigualável. Ela é feita
            com uma base de massa fina e crocante, coberta com molho de tomate
            fresco, queijo mussarela de alta qualidade, manjericão fresco e
            azeite de oliva extra-virgem. A combinação de sabores é perfeita,
            com o molho de tomate suculento e ligeiramente ácido, o queijo
            derretido e cremoso e as folhas de manjericão frescas, que adicionam
            um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que
            agrada a todos os paladares e é uma ótima opção para qualquer
            ocasião.
          </p>
          <p>Serve: de 2 a 3 pessoas</p>
          <Button
            type="link"
            to="/Perfil"
            title="clique aqui para adicionar ao carrinho"
          >
            Adicionar ao carrinho - R$ 60,90
          </Button>
        </div>
        <ImgClose src={close} alt="fechar o modal" />
      </ModalContent>
      <div className="overlay"></div>
    </Modal>
  </>
)

export default Perfil
