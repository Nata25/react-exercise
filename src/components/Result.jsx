import React from 'react'
import { useQuery } from 'react-query'
import { Box } from './material-ui'
import InfoCard from './InfoCard'

function filterData (data, { param, value }) {
  return data.filter(item => {
    if (item[param]) {
      const stringToSearch = item[param].toLowerCase()
      return stringToSearch.includes(value)
    } else return true
  })
}

function Result ({ activeUrl, searchParam }) {
  const query = useQuery(['data', activeUrl], fetchData)

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
  
  const { isError, isLoading, isSuccess } = query
    if (isError) return <li>Something went wrong with request</li>
    else if (isLoading) return <li>loading...</li>
    else if (isSuccess) {
      const data = filterData(query.data, searchParam)
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

export default Result
