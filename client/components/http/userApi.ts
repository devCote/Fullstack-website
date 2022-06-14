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

  const response = await $host.post('api/user/registration', formData)

  return response
}

export const fetchUsers = async () => {
  const response = await $host.get('api/user/getusers')
  return response
}
