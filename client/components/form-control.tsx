import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { Field } from 'formik'

const CustomFormControl = ({ value, validate, isTaken = false }: any) => {

  const checkform = (form: any) => {
    if (value === 'name') return (form.errors.name && form.touched.name)
    return (form.errors.password && form.touched.password)
  }

  const displayError = (form: any) => {
    if (value === 'name') return form.errors.name
    return form.errors.password
  }

  return (
    <Field name={value} validate={validate}>
      {({ field, form }: any) => (
        <FormControl mb={2} isInvalid={checkform(form)}>
          <FormLabel color='whiteAlpha.700' htmlFor={value}>{value}</FormLabel>
          <Input {...field} color='white' type={value === 'name' ? 'text' : 'password'}
            id={value} placeholder={value} />
          <FormErrorMessage color={isTaken ? 'green' : 'red'}>{displayError(form)}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default CustomFormControl
