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
import { useState } from 'react'

type Props = {
  name: string
  description: string
  image: string
  porcao: string
  id?: number
  preco: number
}

const Menu = ({ name, description, image, porcao, preco }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 160) {
      return descricao.slice(0, 157) + '...'
    }
    return descricao
  }

  const [modalEstaAberto, setModalEstaAberto] = useState(false)

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
        <Descricao>{getDescricao(description)}</Descricao>
        <Button
          type="button"
          title="sobre o cardápio"
          onClick={() => setModalEstaAberto(true)}
        ></Button>
      </Card>
      <ModalStyle className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <ImgPizza src={image} alt="imagem do cardápio" />
          <div>
            <h4>{name}</h4>
            <p>{getDescricao(description)}</p>
            <p>{porcao}</p>
            <Button
              type="linkPrice"
              to={`/perfil/`}
              title="clique aqui para adicionar ao carrinho"
            >
              {formataPreco(preco)}
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
