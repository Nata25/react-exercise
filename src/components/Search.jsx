import React from 'react'
import { Box } from './material-ui'

function Search ({ submitQuery }) {
  const queries = ['name']

  return (
    <div>
      <h4>Search in results by:</h4>
      {queries.map(query =>
        <React.Fragment key={query}> 
          <Box component="label" mr={2} htmlFor={query}>{query}</Box>
          <input id={query} onChange={(e) => submitQuery(e, query)} />
        </React.Fragment>
      )}
    </div>
  )
}

export default Search
