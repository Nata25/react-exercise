import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container} from './material-ui'

import Fetcher from './Fetcher'
import Search from './Search'
import Result from './Result'

const DataDisplay = () => {
  const [activeUrl, setUrl] = React.useState('users')
  const [searchParams, setSearchParams] = React.useState({})

  const styles = makeStyles({
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      textAlign: 'left'
    }
  })()

  function submitQuery(params) {
    setSearchParams(params)
  }

  return (
    <Container fixed>
      <h1>Fetch some data!</h1>
      <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
      <Search submitQuery={submitQuery} />
      <div>
        <ul className={styles.list}>
          <Result activeUrl={activeUrl} searchParams={searchParams} />
        </ul>
      </div>
    </Container>
  )
}

export default DataDisplay