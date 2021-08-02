
import { useQuery, UseQueryResult } from 'react-query'
import fetchData from '../actions/fetch-data'
import { DataObject } from '../types' 

function useQueryData (activeUrl: string): UseQueryResult<DataObject[] | undefined, Boolean> {
  return useQuery(['data', activeUrl], () => fetchData(activeUrl))
}

export default useQueryData 