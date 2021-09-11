import { useState } from 'react'
import axios from 'axios'

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false
}

export default function useApi(config) {
  const [requestInfo, setResquestInfo] = useState(initialRequestInfo)

  async function call(localConfig) {
    setResquestInfo({
      ...initialRequestInfo,
      loading: true
    })
    let response = null
    try {
      response = await axios({
        baseURL: 'http://localhost:5000',
        ...config,
        ...localConfig
      })
      setResquestInfo({
        ...initialRequestInfo,
        data: response.data
      })
    } catch (error) {
      setResquestInfo({
        ...initialRequestInfo,
        error
      })
    }

    if (config.onCompleted) {
      config.onCompleted(response)
    }
  }

  return [call, requestInfo]
}
