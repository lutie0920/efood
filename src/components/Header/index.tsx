import { Link, useParams } from 'react-router-dom'
import { HeaderBar, Imagem, DivLink, DivTitulo } from './styles'

import fundo from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import { Restaurantes } from '../../pages/Home'
import { useEffect, useState } from 'react'

const Header = () => {
  const { id } = useParams()

  const [rest, setRest] = useState<Restaurantes>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRest(res))
  }, [id])

  if (!rest) {
    return <h3>Carregando...</h3>
  }

  return (
    <header>
      <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
        <DivLink className="container">
          <ul>
            <Link to="/">Restaurantes</Link>
          </ul>
          <img src={logo} alt="EFOOD" />
          <Link to="#">0 produto(s) no carrinho</Link>
        </DivLink>
      </HeaderBar>
      <div>
        <Imagem style={{ backgroundImage: `url(${rest.capa})` }} />
        <DivTitulo className="container">
          <h2>{rest.tipo}</h2>
          <p>{rest.titulo}</p>
        </DivTitulo>
      </div>
    </header>
  )
}

export default Header
