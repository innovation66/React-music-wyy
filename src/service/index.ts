import { BASE_URL, TIME_OUT } from './config'
import LzsRequest from './request'

const lzsRequest = new LzsRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    }
  }
})

export default lzsRequest
