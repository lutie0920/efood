import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer, ButtonLink } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: #ffebd9;

  ${ButtonContainer} {
    width: 304px;
    height: 24px;
    color: ${cores.rosa};
    background: #ffebd9;
    justify-content: center;
    display: flex;
    margin-top: 4px;
    margin-left: 8px;
  }
`
export const Image = styled.img`
  width: 304px;
  height: 167px;
  margin-top: 8px;
  margin-left: 8px;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  margin-right: 8px;
  margin-left: 8px;
  line-height: 22px;
`

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  padding-left: 32px;
  padding-bottom: 32px;
  position: relative;
  z-index: 1;
  background-color: ${cores.rosa};
  color: ${cores.branco};

  div {
    margin-left: 24px;
    margin-top: 32px;

    h4 {
      font-size: 18px;
      font-weight: 900;
    }

    p {
      width: 656px;
      margin-top: 16px;
      font-family: Roboto;
      font-size: 14px;
      font-weight: 400;
      font-family: Roboto;
      line-height: 22px;
    }

    ${ButtonLink} {
      margin-top: 16px;
      color: ${cores.rosa};
      background-color: ${cores.bege};
    }
  }
`

export const ImgPizza = styled.img`
  width: 280px;
  height: 280px;
  margin-top: 32px;
  object-fit: cover;
`

export const ImgClose = styled.img`
  width: 16px;
  height: 16px;
  margin-top: 8px;
  margin-right: 8px;
`
