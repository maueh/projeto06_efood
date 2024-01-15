import styled from 'styled-components'
import { colors } from '../../styles'

export const Checkout = styled.div`
  label {
    width: 100%;
  }

  input {
    width: 100%;

    &.error {
      border-color: #f33;
      color: #c33;
      background-color: #fbb;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    column-gap: 34px;
    row-gap: 8px;
  }

  fieldset {
    margin-top: 16px;
    margin-bottom: 24px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    border: none;
  }

  .row {
    display: grid;
    column-gap: 34px;
    grid-template-columns: 1fr 1fr;
  }

  .fraction {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }
`

export const InputGroup = styled.div`
  label {
    margin-bottom: 8px;
  }

  small {
    color: ${colors.lightPrimary_1};
  }
`
