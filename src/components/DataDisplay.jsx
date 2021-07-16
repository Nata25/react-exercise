import React from 'react'
import Fetcher from './Fetcher'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
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

  // styling staff
  const styles = makeStyles({
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      textAlign: 'left'
    }
  })()
  
  return (
    <Container fixed>
      <h1>Fetch some data!</h1>
      <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
      <div>
        <ul className={styles.list}>
          {data.map(item =>
            <Box
              component="li"
              mt={2}
              mb={2}
              key={item.id}
            >
              {JSON.stringify(item)}
            </Box>
          )}
        </ul>
      </div>
    </Container>
  )
}

export default DataDisplay