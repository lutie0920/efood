import {
  Card,
  Descricao,
  Titulo,
  Image,
  ImgClose,
  ImgPizza,
  ModalContent,
  ModalStyle
} from './styles'

import marguerita from '../../assets/images/pizza.jpg'
import close from '../../assets/images/close.png'

import Button from '../Button'
import { useState } from 'react'

type Props = {
  name: string
  description: string
  image: string
}

const Menu = ({ name, description, image }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Card>
        <Image src={image} />
        <Titulo>{name}</Titulo>
        <Descricao>{description}</Descricao>
        <Button
          type="button"
          title="sobre o cardápio"
          onClick={() => setModalEstaAberto(true)}
        >
          Adicionar ao carrinho
        </Button>
      </Card>
      <ModalStyle className={modalEstaAberto ? 'visivel' : ''}>
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
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
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
          <ImgClose
            src={close}
            alt="fechar o modal"
            onClick={() => setModalEstaAberto(false)}
          />
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </ModalStyle>
    </>
  )
}

export default Menu
