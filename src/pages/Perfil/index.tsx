import MenuList from '../../components/MenuList'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'

import { Cardapio } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  const [cardapio, getCardapios] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`).then(
      (res) =>
        res.json().then((res) => {
          if (res.cardapio) {
            getCardapios(res.cardapio)
          }
          return
        })
    )
  }, [id])

  return (
    <>
      <Header />
      <div className="container">
        <MenuList menu={cardapio} />
      </div>
    </>
  )
}
export default Perfil
