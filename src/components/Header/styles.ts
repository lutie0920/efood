import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: ${cores.rosa};
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 171px;
`

export const LinkCart = styled.a`
  margin-right: 171px;
  display: flex;
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
    margin-left: 170px;
  }

  p {
    font-size: 32px;
    font-weight: 900;
    margin-left: 170px;
    padding-top: 158.75px;
  }
`
