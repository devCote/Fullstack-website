import React, { useState } from 'react';
import { AlertStatus, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import CustomFormControl from './form-control';
import axios from 'axios'
import AlertPopup from './status';

const initialState = {
  isVisible: false,
  message: 'Your account has been created, you can login now.',
  status: 'success' as AlertStatus
}

const BasicForm = () => {

  const [file, setFile]: any = useState()
  const [alertPopup, setAlertPopup] = useState(initialState)

  function validate(value: string) {
    if (!value) {
      return 'Name is required'
    } else if (value.length < 3) {
      return "Jeez! Its too short 😱"
    }
  }

  return (
    <div>
      <AlertPopup alert={alertPopup} setAlert={setAlertPopup} />
      <Formik
        initialValues={{ name: '', password: '', text: '' }}
        onSubmit={(values, actions) => {
          const filetype = file.name.slice(0, file.name.lastIndexOf('.'))
          const name = values.name + '.' + filetype
          setFile({...file, name })
          axios.post('http://localhost:7000/file',
            {
              user: {values},
              file
            }, {
              headers: {'Content-Type': 'multipart/form-data' }
            }).then((_res) => {
        actions.resetForm()
              setAlertPopup({...initialState, isVisible: true })
            })
            .catch((e) => {
        setAlertPopup({ isVisible: true, status: 'error', message: e.response.message })
              actions.setFieldError('name', e.response.data)
            })
            .finally(() => actions.setSubmitting(false))
         }}
      >
      {(props) => (
        <Form style={{ marginTop: '10px' }}>
          <CustomFormControl value='name' validate={validate} />
          <CustomFormControl value='password' validate={validate} />
          <CustomFormControl value='text' isText validate={validate} />
          <CustomFormControl setFile={setFile} value='image' isImage />
          <Button
            mt={4}
            colorScheme='whiteAlpha'
            _hover={{ color: "white" }}
            variant='outline'
            isLoading={props.isSubmitting}
            type='submit'
          >
            Submit
          </Button>
        </Form>
      )
      }
    </Formik>
    </div >
  )
}

export default BasicForm
