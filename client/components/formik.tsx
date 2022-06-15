import React, { useContext, useState } from 'react';
import { AlertStatus, Button } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import CustomFormControl from './form-control';
import AlertPopup from './popup';
import { registration } from './http/userApi';
import { StoreContext } from '../pages/_app';

const initialState = {
  isVisible: false,
  message: 'Your card has been created, you can reload the page and see the results.',
  status: 'success' as AlertStatus
}

const BasicForm = () => {

  const [file, setFile]: any = useState()
  const [alertPopup, setAlertPopup] = useState(initialState)
  const store = useContext(StoreContext)

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
        initialValues={{ firstName: '', lastName: '', text: '' }}
        onSubmit={async (values: any, actions) => {
          try {
            const res = await registration(values, file)
            actions.resetForm()
            setAlertPopup({ ...initialState, isVisible: true })
            store.fetchUsers()
          } catch (e: any) {
            setAlertPopup({ isVisible: true, status: 'error', message: e.response.message })
            actions.setFieldError('name', e.response.data)
          } finally {
            actions.setSubmitting(false)
          }
        }}
      >
        {(props) => (
          <Form style={{ marginTop: '10px' }}>
            <CustomFormControl value='firstName' validate={validate} />
            <CustomFormControl value='lastName' validate={validate} />
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
