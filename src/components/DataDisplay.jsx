import React from 'react'
import Fetcher from './Fetcher'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

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

  const useStyles = makeStyles({
    list: {
      listStyleType: 'none',
      paddingLeft: 0
    }
  })
  const styles = useStyles()
  
  return (
    <Container fluid>
      <h1>Fetch some data!</h1>
      <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
      <ul className={styles.list}>
        {data.map(user => 
          <li key={user.id}>{JSON.stringify(user)}</li>
        )}        
      </ul>
    </Container>
  )
}

export default DataDisplay