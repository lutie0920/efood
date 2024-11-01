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

import close from '../../assets/images/close.png'

import Button from '../Button'
import { useEffect, useState } from 'react'
import { Cardapio, Restaurantes } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  name: string
  description: string
  image: string
}

const Menu = ({ name, description, image }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [cardapio, setCardapio] = useState<Cardapio>()

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

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
        ></Button>
      </Card>
      <ModalStyle className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <ImgPizza src={cardapio?.foto} alt="imagem do cardápio" />
          <div>
            <h4>{cardapio?.nome}</h4>
            <p>{cardapio?.descricao}</p>
            <p>{cardapio?.porcao}</p>
            <Button
              type="link"
              to={`/perfil/${cardapio?.id}`}
              title="clique aqui para adicionar ao carrinho"
            >
              {formataPreco(cardapio?.preco)}
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
