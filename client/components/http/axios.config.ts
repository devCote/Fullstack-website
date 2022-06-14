import axios from 'axios'

export const url = 'http://localhost:7000/'

const $host = axios.create({
  baseURL: url
})

export {
  $host,
}
