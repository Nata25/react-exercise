import { DataObject, ParamsObject } from '../types'

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

export default filterData
