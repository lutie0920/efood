import MenuList from '../../components/MenuList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

import { Restaurantes } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) => res.json().then((res) => setRestaurante(res))
    )
  }, [id])

  return (
    <>
      <Header />
      <div className="container">
        <MenuList menu={restaurante?.cardapio} />
      </div>
    </>
  )
}
export default Perfil
