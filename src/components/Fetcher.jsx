import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

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