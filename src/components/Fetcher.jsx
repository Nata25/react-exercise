import React from 'react'
import { Grid, Button } from './material-ui'

const Fetcher = ({ dataAlias, submitUrl }) => {
  const urls = ['users', 'posts', 'comments']
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {urls.map(button => {
        return (
          <Grid item key={button}>
            <Button
              onClick={() => submitUrl(button)}
              color={dataAlias === button ? 'primary' : 'default'}
              variant="contained"
            >
              {button}
            </Button>  
          </Grid>
        )
        })
      }
    </Grid>
  )
}

export default Fetcher