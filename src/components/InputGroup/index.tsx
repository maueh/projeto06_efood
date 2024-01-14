//import { Formik, FormikConfig, FormikContextType, FormikProps } from 'formik'
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute
} from 'react'

type Props = {
  label: string
  htmlName: string
  type: HTMLInputTypeAttribute
  required?: boolean
  inputMode?: 'numeric' | 'text' | 'decimal'
  value?: string
  onChange?: ChangeEventHandler
  onBlur?: FocusEventHandler
  errorMessage?: string
}

const InputGroup = ({
  label,
  type,
  htmlName,
  required = false,
  inputMode,
  value,
  onChange,
  onBlur
}: Props) => {
  /*
  const erro = (fieldname: string) => {
    const isTouched = fieldname in form.touched
    const isInvalid = fieldname in form.errors
    if (isTouched && isInvalid) return true
    return false
  }*/
  return (
    <>
      <div>
        <label htmlFor={htmlName}>{label}</label>
        <input
          type={type}
          id={htmlName}
          name={htmlName}
          required={required}
          inputMode={inputMode}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />

        {/* {form && erro(htmlName) ? <small>{form.errors}</small> : <></>} */}
      </div>
    </>
  )
}

export default InputGroup
