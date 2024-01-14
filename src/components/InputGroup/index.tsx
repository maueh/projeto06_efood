import { HTMLInputTypeAttribute } from 'react'

type Props = {
  label: string
  htmlName: string
  type: HTMLInputTypeAttribute
  required?: boolean
}

const InputGroup = ({ label, type, htmlName, required = false }: Props) => {
  return (
    <>
      <div>
        <label htmlFor={htmlName}>{label}</label>
        <input type={type} name={htmlName} required={required} />
      </div>
    </>
  )
}

export default InputGroup
