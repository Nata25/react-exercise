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
          console.log(data)
          setData(data)
        })
        .catch(e => {
          throw new Error(e)
        })
  }, [activeUrl])

  // styling staff
  const useStyles = makeStyles({
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      textAlign: 'left'
    }
  })
  const styles = useStyles()
  
  return (
    <Container fixed alignItems="start">
      <h1>Fetch some data!</h1>
      <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
      <div>
        <ul className={styles.list}>
          {data.map(item =>
            <li
              key={item.id}
            >
              {JSON.stringify(item)}
            </li>
          )}
        </ul>
      </div>
    </Container>
  )
}

export default DataDisplay