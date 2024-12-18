import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

export type Restaurantes = {
  id: number
  titulo: string
  destacado: string[]
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

export type Cardapio = {
  id: number
  preco: number
  foto: string
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurantes, setRestaurante] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [])

  return (
    <>
      <Hero />
      <div className="container">
        <RestaurantsList restaurantes={restaurantes} />
      </div>
    </>
  )
}

export default Home
