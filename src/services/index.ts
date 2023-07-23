import axios from 'axios'

const API_ENVS = {
  production: 'https://vuejsbrasil-feedbacker-backend.vercel.app/',
  development: 'http://localhost:3000',
  local: 'http://localhost:3000'
}

type ApiEnvsType = 'production' | 'development' | 'local';
const apiEnv: ApiEnvsType = process.env.NODE_ENV

const httpClient = axios.create({
  baseURL: API_ENVS[apiEnv] || API_ENVS.local
})

httpClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const canThrowAnError = error.request.status === 0 ||
    error.request.status === 500
  if (canThrowAnError) {
    throw new Error(error.message)
  }
  return error
})

export default {}
