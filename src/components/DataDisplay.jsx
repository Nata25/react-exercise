import React from 'react'
import Fetcher from './Fetcher'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from 'react-query'
import { Container, Box } from './material-ui'

const DataDisplay = () => {
  // const [data, setData] = React.useState(() => [])
  const [activeUrl, setUrl] = React.useState('users')
  
  function fetchData () {
    const url = `http://localhost:9000/${activeUrl}`
    return fetch(url)
        .then(
          response => {
            return response.json()
          }
        )
        .then(data => {
          return data
        })
        .catch(e => {
          throw new Error(e)
        })
  }

  // const queryClient = useQueryClient()
  const query = useQuery(['data', activeUrl], fetchData)

  // styling staff
  const styles = makeStyles({
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      textAlign: 'left'
    }
  })()

  const result = () => {
    if (query.isError) return <li>Something went wrong with request</li>
    else if (query.isLoading) return <li>loading...</li>
    else if (query.isSuccess) {
      return (
        query.data.map(item =>
          <Box
            component="li"
            mt={2}
            mb={2}
            key={item.id}
          >
            {JSON.stringify(item)}
          </Box>
        )
      )
    }
  }
  
  return (
    <Container fixed>
      <h1>Fetch some data!</h1>
      <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
      <div>
        <ul className={styles.list}>
          {result()}
        </ul>
      </div>
    </Container>
  )
}

export default DataDisplay