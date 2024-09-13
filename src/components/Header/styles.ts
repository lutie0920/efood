import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  margin-top: 23px;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
  }
`
export const DivLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
`
export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  h2 {
    font-size: 32px;
    font-weight: 100;
    padding-top: 20px;
  }

  p {
    font-size: 32px;
    font-weight: 900;
    padding-top: 158.75px;
  }
`
