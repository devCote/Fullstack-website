import { $host } from './axios.config'

interface newCredentials {
  (values: { email: string, password: string, text: string }, file: object): void
}

export const registration: newCredentials = async (values: any, file: any) => {
  const formData = new FormData()
  formData.append('firstName', values.firstName)
  formData.append('lastName', values.lastName)
  formData.append('text', values.text)
  formData.append('file', file)

  try {
    const response = await $host.post('api/user/registration', formData)
    return response
  } catch (err: any) {
    alert(err.message)
  }

}

export const fetchUsers = async () => {
  try {
    const response = await $host.get('api/user/getusers')
    return response
  } catch (err: any) {
    alert(err.message)
  }
}
