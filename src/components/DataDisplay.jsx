import React from 'react'
import Fetcher from './Fetcher'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from 'react-query'
import { Container, Box, Card } from './material-ui'
import Search from './Search'

const DataDisplay = () => {
  const [activeUrl, setUrl] = React.useState('users')
  const [searchQuery, setSearchQuery] = React.useState({ query: '', value: '' })
  
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

  const query = useQuery(['data', activeUrl], fetchData)

  const styles = makeStyles({
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      textAlign: 'left'
    }
  })()

  const InfoCard = ({ item }) => {
    const { name, email, phone, text, date, title } = item
    return (
      <Card variant="outlined">
        <Box component="article" p={3}>
          {title && <h3>{title}</h3>}
          {name && <h4>{name}</h4>}
          {email && <p>
            <a href={`mailto:${email}`} target="blank"
              >
              {email}
            </a>
          </p>}
          {phone && <p>
            <a href={`tel:${phone}`}>
            {phone}
            </a>
          </p>}
          {text && <p>{text}</p>}
          {date && <p>{date}</p>}
        </Box>
      </Card>
    )
  }

  const result = () => {
    if (query.isError) return <li>Something went wrong with request</li>
    else if (query.isLoading) return <li>loading...</li>
    else if (query.isSuccess) {
      const data = query.data.filter(item => {
        if (item[searchQuery.query]) {
          return item[searchQuery.query].includes(searchQuery.value)
        } else return true
      })
      return (
        data.map(item =>
          <Box
            component="li"
            mt={2}
            mb={2}
            key={item.id}
          >
            <InfoCard item={item} />
          </Box>
        )
      )
    }
  }

  function submitQuery(e, query) {
    const { value } = e.target
    setSearchQuery({ query, value })
  }
  
  return (
    <Container fixed>
      <h1>Fetch some data!</h1>
      <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
      <Search submitQuery={submitQuery} />
      <div>
        <ul className={styles.list}>
          {result()}
        </ul>
      </div>
    </Container>
  )
}

export default DataDisplay