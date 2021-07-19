import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Container} from './material-ui'

import Fetcher from './Fetcher'
import Search from './Search'
import Result from './Result'

import { FormContextProvider } from  './form-context'

const DataDisplay = () => {
  const [activeUrl, setUrl] = React.useState('users')
  const queries = ['id', 'name', 'email']

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
      <FormContextProvider queries={queries}>  
        <Fetcher dataAlias={activeUrl} submitUrl={setUrl}/>
        <Search queries={queries}/>
        <div>
          <ul className={styles.list}>
            <Result activeUrl={activeUrl} />
          </ul>
        </div>
      </FormContextProvider>
    </Container>
  )
}

export default DataDisplay