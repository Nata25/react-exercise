import React from 'react'
import Fetcher from './Fetcher'

const DataDisplay = () => {
  const [data, setData] = React.useState(() => [])
  const [activeUrl, setUrl] = React.useState('users')
  
  // component mounted
  React.useEffect(() => {
    const url = `http://localhost:9000/${activeUrl}`
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
  }, [activeUrl])
  
  return (
    <div>
      <h1>Fetch some data!</h1>
      <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
      <ul>
        {data.map(user => 
          <li key={user.id}>{JSON.stringify(user)}</li>
        )}        
      </ul>
    </div>
  )
}

export default DataDisplay