import React from 'react'
import { useState } from 'react'



export const useFetch = () => {

  const [state, setstate] = useState({
    data: null,
    isLoading: true,
    error: null
  })

  const { data, isLoading, error } = state

  const fetchData = async (url, method, bodyData = null) => {
    if (!url) return
    try {

      const options = {
        method: method,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: method == 'GET' || method == 'DELETE' ? null : JSON.stringify(bodyData)
      }

      const res = await fetch(url, options)
      const data = await res.json()

      setstate({
        data,
        isLoading: false,
        error: null
      })
    }

    catch (error) {

      setstate({
        data: null,
        isLoading: false,
        error: error
      })
    }


  }


  return {
    data,
    isLoading,
    error,
    fetchData
  }
}
