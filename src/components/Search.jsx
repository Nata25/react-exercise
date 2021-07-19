import React from 'react'
import { Box } from './material-ui'
import { useForm } from './form-context'

function Search ({ queries }) {
  const [, formDispatch] = useForm()

  function onChange (e, query) {
    const payload = { [query]: e.target.value }
    formDispatch(payload)
  }

  return (
    <div style={ { textAlign: 'left' } }>
      <h4>Search in results by:</h4>
      {queries.map(query =>
        <Box mb={3} key={query}> 
          <Box component="label" mr={2} htmlFor={query}>{query}</Box>
          <input id={query} onChange={(e) => onChange(e, query)} />
        </Box>
      )}
    </div>
  )
}

export default Search
