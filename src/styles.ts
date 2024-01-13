import { createGlobalStyle } from 'styled-components'

export enum TextCase {
  'capitalize'
}

export const cores = {
  branca: '#FFF',
  primaria: '#E66767',
  primariaClara1: '#FFEBD9',
  primariaClara2: '#FFF8F2',
  amarela: '#FFB930'
  // preta: '#111',
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;

    &:not(dialog) {
    margin: 0;
    padding: 0;
    }
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
    /* padding-left: 24px;
    padding-right: 24px; */

    @media (max-width: ${breakpoints.desktop}) {
      width: 80%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      width: 96%;
    }
  }

  .container-dialog{
    max-width: 1024px;
    width: 100%;
  }

  .capitalize {
  text-transform: capitalize;
  }

  .loading{
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .wrapper{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }

  .upperWrapper{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
`
