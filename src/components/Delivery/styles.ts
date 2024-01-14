import styled from 'styled-components'
import { cores } from '../../styles'

export const CheckoutContainer = styled.div`
  background-color: ${cores.primaria};

  label {
    width: 100%;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    column-gap: 34px;
    row-gap: 8px;
  }
`
