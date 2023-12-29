import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF',
  primaria: '#E66767',
  primariaClara1: '#FFEBD9',
  primariaClara2: '#FFF8F2',
  amarela: '#FFB930'
  // preta: '#111',
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    font-size: 10px;
  }

  body {
    background-color: ${cores.primariaClara2};
    color: ${cores.primaria};
    font-size: 10px;

  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;


  }
`
