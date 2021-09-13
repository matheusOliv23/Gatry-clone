import { useState } from 'react'
import axios from 'axios'
import useDebouncedPromise from './useDebouncePromise'

const initialRequestInfo = {
  error: null,
  data: null,
  loading: false
}

export default function useApi(config) {
  const [requestInfo, setResquestInfo] = useState(initialRequestInfo)
  const debouncedAxios = useDebouncedPromise(axios, config.debounceDelay)

  async function call(localConfig) {
    setResquestInfo({
      ...initialRequestInfo,
      loading: true
    })
    let response = null
    const finalConfig = {
      baseURL: 'http://localhost:5000',
      ...config,
      ...localConfig
    }
    const fn = finalConfig.debounced ? debouncedAxios : axios

    try {
      response = await fn(finalConfig)
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
    return response
  }

  return [call, requestInfo]
}
