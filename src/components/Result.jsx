import React from 'react'
import { useQuery } from 'react-query'
import { Box } from './material-ui'
import InfoCard from './InfoCard'

function filterData (data, params) {
  const result = Object.keys(params).reduce((acc, current) => {
    const filtered = acc.filter(item => {
      if (item[current]) {
        const stringToSearch = item[current].toString().toLowerCase()
        return stringToSearch.includes(params[current])
      } else return true
    })
    return filtered
  }, data)
  return result
}

function Result ({ activeUrl, searchParams }) {
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
      const data = filterData(query.data, searchParams)
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
