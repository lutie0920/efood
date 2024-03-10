import {
  Imagem,
  Logo,
  Titulo,
  Div,
  Carrinho,
  Tipo,
  Nome,
  ImgDiv,
  NomeDiv
} from './styles'

import FundoImg from '../../assets/images/fundo.png'
import FotoPrato from '../../assets/images/image2.png'
import LogoImg from '../../assets/images/logo.png'

const Header = () => (
  <Imagem style={{ backgroundImage: `url(${FundoImg})` }}>
    <Div>
      <Titulo>Restaurante</Titulo>
      <Logo src={LogoImg} />
      <Carrinho>0 produto(s) no carrinho</Carrinho>
    </Div>
    <ImgDiv
      style={{
        filter: `brightness(0.5)`,
        backgroundImage: `url(${FotoPrato})`
      }}
    >
      <NomeDiv>
        <Tipo>Italiana</Tipo>
        <Nome>La Dolce Vita Trattoria</Nome>
      </NomeDiv>
    </ImgDiv>
  </Imagem>
)

export default Header
