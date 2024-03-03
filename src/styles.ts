import { createGlobalStyle } from 'styled-components'

export const Cores = {
  rosa: '#E66767',
  branco: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    color: ${Cores.rosa}
  }
`
