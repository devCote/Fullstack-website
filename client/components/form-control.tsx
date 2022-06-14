import { FormControl, FormLabel, Input, FormErrorMessage, InputProps, Textarea, TextareaProps } from '@chakra-ui/react'
import { Field } from 'formik'

const CustomFormControl = ({ value, validate, isTaken = false, isText, isImage, setFile }: any) => {

  const checkform = (form: any) => {
    const { errors, touched } = form
    switch (value) {
      case "name": return { error: errors.name, touched: touched.name }
      case "text": return { error: errors.text, touched: touched.text }
      case "password": return { error: errors.password, touched: touched.password }
      default: return
    }
  }

  const handleChange = (e: any) => {
    console.log(e.target.files)
    setFile(e.target.files[0])
  }

  const defaultInput = (field: InputProps) =>
    <Input {...field} color='white' type={'text'}
      id={value} placeholder={value} />

  const textInput = (field: TextareaProps) =>
    <Textarea {...field} color='white' type={'text'}
      id={value} placeholder={value} />

  const imageInput = () =>
    <input name='img' type={'file'} id={value} color="white" onChange={handleChange} />


  return (
    <Field name={value} validate={validate}>
      {({ field, form }: any) => (
        <FormControl mb={2} isInvalid={checkform(form)?.error && checkform(form)?.touched}>
          <FormLabel color='whiteAlpha.700' htmlFor={value}>{value}</FormLabel>
          {isText ? textInput(field) : isImage ? imageInput() : defaultInput(field)}
          <FormErrorMessage color={isTaken ? 'green' : 'red'}>{checkform(form)?.error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default CustomFormControl
