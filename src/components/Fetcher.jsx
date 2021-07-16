import React from 'react'
import Button from '@material-ui/core/Button'

const Fetcher = ({ dataAlias, submitUrl }) => {
  const urls = ['users', 'posts', 'comments']
  return (
    <div>
      {urls.map(button => {
        return (
          <Button
            key={button}
            onClick={() => submitUrl(button)}
            color={dataAlias === button ? 'primary' : 'default'}
            variant="contained"
          >
            {button}
          </Button>
        )
        })
      }
    </div>
  )
}

export default Fetcher