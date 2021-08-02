import { FC } from 'react'
import { Grid, Button } from './material-ui'

interface IFetcherProps {
  dataAlias: string,
  submitUrl: (arg: string) => void
}

const Fetcher: FC<IFetcherProps> = ({ dataAlias, submitUrl }) => {
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