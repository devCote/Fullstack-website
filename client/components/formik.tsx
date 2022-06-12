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

  const [alert, setAlert] = useState(initialState)

  function validate(value: string) {
    if (!value) {
      return 'Name is required'
    } else if (value.length < 3) {
      return "Jeez! Its too short 😱"
    }
  }

  const getSendOptions = (value: any) => ({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    data: JSON.stringify(value),
    url: 'http://localhost:7000/api/user/register',
  })

  return (
    <div>
      <AlertPopup alert={alert} setAlert={setAlert} />
      <Formik
        initialValues={{ name: '', password: '' }}
        onSubmit={(values, actions) => {
          // check if name available
          // send name to database
          axios(getSendOptions(values))
            .then((_res) => {
              actions.resetForm()
              setAlert({ ...initialState, isVisible: true })
            })
            .catch((e) => {
              setAlert({ isVisible: true, status: 'error', message: e.response.message })
              actions.setFieldError('name', e.response.data)
            })
            .finally(() => actions.setSubmitting(false))
        }}
      >
        {(props) => (
          <Form style={{ marginTop: '10px' }}>
            <CustomFormControl value='name' validate={validate} />
            <CustomFormControl value='password' validate={validate} />
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
    </div>
  )
}

export default BasicForm
