import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.bege};
  margin-top: 96px;
  text-align: center;
`

export const FootSection = styled.div`
  img {
    margin-top: 40px;
  }

  p {
    padding: 40px;
    font-size: 10px;
    font-weight: 400;
  }
`

export const Links = styled.div`
  margin-bottom: 48px;
  display: flex;
  justify-content: center;
`

export const Link = styled.a`
  text-decoration: none;
  margin-left: 16px;
`
