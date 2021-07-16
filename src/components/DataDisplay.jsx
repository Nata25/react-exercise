import React from 'react'
import Fetcher from './Fetcher'

const DataDisplay = () => {
  const [data, setData] = React.useState(() => [])
  const [activeUrl, setUrl] = React.useState('users')

  const memoisedFetch = React.useCallback((url) => {
    fetch(url)
      .then(
        response => {
          return response.json()
        }
      )
      .then(data => {
        setData(data)
      })
      .catch(e => {
        throw new Error(e)
      })
  }, [])

  const useFetch = (url) => {
    React.useEffect(() => {
      memoisedFetch(url)
    }, [url])
  }

  // component mounted
  useFetch(`http://localhost:9000/${activeUrl}`)

  const memoisedCallback = React.useCallback((url) => {
    setUrl(url)
  }, [])
  

  return (
    <div>
      <h1>Fetch some data!</h1>
      <Fetcher submitUrl={memoisedCallback}/>
      <ul>
        {data.map(user => 
          <li key={user.id}>{JSON.stringify(user)}</li>
        )}        
      </ul>
    </div>
  )
}

export default DataDisplay