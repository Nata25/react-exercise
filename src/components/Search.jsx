import React from 'react'
import { Box } from './material-ui'

function Search ({ submitQuery }) {
  const queries = ['name', 'id']
  const form = queries.reduce((acc, current) => {
    acc[current] = ''
    return acc
  }, {})

  function formReducer (state, action) {
    return {
      ...state,
      ...action
    }
  }

  const [formState, formDispatch] = React.useReducer(formReducer, form)

  function onChange (e, query) {
    const payload = { [query]: e.target.value }
    formDispatch(payload)
    submitQuery(formState)
  }

  return (
    <div>
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
