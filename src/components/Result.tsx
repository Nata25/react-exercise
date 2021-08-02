import { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query'
import { Box } from './material-ui'
import { useForm } from './form-context'
import InfoCard from './InfoCard'
import { DataObject, ParamsObject } from '../types'

interface IResultProps {
  activeUrl: string
}

function filterData<T extends DataObject> (data: T[], params: ParamsObject): T[] {
  const result = Object.keys(params).reduce((acc, current) => {
    const filtered: T[] = acc.filter(item => {
      if (item.hasOwnProperty(current)) {
        const stringSearchable: string = item[current].toString().toLowerCase()
        const stringToSearch = params[current].toLowerCase()
        return stringSearchable.includes(stringToSearch)
      } else return true
    })
    return filtered
  }, data)
  return result
}

const Result: FC<IResultProps> = ({ activeUrl }) => {
  function fetchData<T>(): Promise<T> {
    return fetch(`http://localhost:9000/${activeUrl}`)
        .then(
          response => {
            return response.json()
          }
        )
        .then(function(data) {
          return data
        })
        .catch(e => {
          throw new Error(e)
        })
  }

  const query: UseQueryResult<(DataObject)[] | undefined, Boolean> = useQuery(['data', activeUrl], fetchData)
  const [searchParams] = useForm()

  const { isError, isLoading, isSuccess } = query
  if (isError) return <li>Something went wrong with request</li>
  else if (isLoading) return <li>loading...</li>
  else if (isSuccess && query) {
    const data = searchParams ? filterData(query.data as DataObject[], searchParams) : query.data ? query.data : []
    return (
      <div>
        {data.map(item =>
          <Box
            component="li"
            mt={2}
            mb={2}
            key={item.id}
          >
            <InfoCard item={item} />
          </Box>
        )}
      </div>
    )
  }
  else return <p/>
}

export default Result
