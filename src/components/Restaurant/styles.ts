import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonLink } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  height: 398px;
  background-color: #fff;
  border: 1px solid;
  border-color: ${cores.rosa};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    margin-top: 8px;
    margin-left: 8px;
  }
`
export const Image = styled.img`
  width: 100%;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  margin-left: 8px;

  span {
    float: right;
    margin-right: 8px;
    display: flex;

    img {
      margin-left: 8px;
    }
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 16px;
  margin-right: 8px;
  margin-left: 8px;
  line-height: 22px;
`

export const Infos = styled.div`
  position: absolute;
  display: flex;
  width: max-content;
  top: 8px;
  right: 8px;
`
