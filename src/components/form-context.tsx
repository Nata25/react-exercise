import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react'
import { ParamsObject } from '../types'

interface IFormContextProviderProps {
  queries: string[],
  children: ReactNode
}

const FormContext = createContext<[ParamsObject, Dispatch<ParamsObject>] | []>([])

function formReducer (state: ParamsObject, action: ParamsObject) {
  return {
    ...state,
    ...action
  }
}

const useForm = () => {
  return useContext(FormContext)
}

const FormContextProvider = ({ queries, children }: IFormContextProviderProps) => {
  const form = queries.reduce((acc, current) => {
    Object.assign(acc, current, '')
    return acc
  }, {})
  const value: [ParamsObject, Dispatch<ParamsObject>] = useReducer(formReducer, form)
  return (
    <FormContext.Provider value={value} children={children} />
  )
}



export { useForm, FormContextProvider }