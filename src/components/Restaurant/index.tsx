import Tag from '../Tag'

import { Card, Descricao, Titulo, Infos, Image } from './styles'

import estrela from '../../assets/images/estrela.png'
import Button from '../Button'
import { useEffect, useState } from 'react'
import { Restaurantes } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  name: string
  rating: string
  infos: string[]
  description: string
  image: string
  type: string
}

const Restaurant = ({
  name,
  infos,
  rating,
  description,
  image,
  type
}: Props) => {
  const { id } = useParams()

  const [restaurantes, setRestaurante] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <Image src={image} />
      <Infos>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>Destaque</Tag>
          ))}
          <Tag>{type}</Tag>
        </Infos>
      </Infos>
      <Titulo>
        {name}
        <span>
          {rating}
          <img src={estrela} />
        </span>
      </Titulo>
      <Descricao>{getDescricao(description)}</Descricao>
      <Button
        type="link"
        to={`/perfil/${restaurantes}`}
        title="clique aqui para mais informações do restaurante"
      >
        Saiba mais
      </Button>
    </Card>
  )
}

export default Restaurant
