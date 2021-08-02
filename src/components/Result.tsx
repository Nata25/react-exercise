import { FC } from 'react'
import { Box } from './material-ui'
import { useForm } from '../hooks/useForm'
import InfoCard from './InfoCard'
import { DataObject } from '../types'
import filterData from '../helpers/filter-items'
import useDataQuery from '../hooks/useDataQuery'

interface IResultProps {
  activeUrl: string
}

const Result: FC<IResultProps> = ({ activeUrl }) => {
  const query = useDataQuery(activeUrl)
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
