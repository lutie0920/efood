import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branco: '#FFF8F2',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    }

    body {
        background-color: ${cores.branco};
        color: ${cores.rosa}
    }

.container {
  max-width: 1024px;
  width: 100%;
  margin-left: 171px;
}
`