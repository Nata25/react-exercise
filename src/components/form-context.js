import React from 'react'

const FormContext = React.createContext()

function formReducer (state, action) {
  return {
    ...state,
    ...action
  }
}

function useForm () {
  return React.useContext(FormContext)
}

const FormContextProvider = ({ queries, children }) => {
  const form = queries.reduce((acc, current) => {
    acc[current] = ''
    return acc
  }, {})
  const value = React.useReducer(formReducer, form)
  return (
    <FormContext.Provider value={value} children={children} />
  )
}



export { useForm, FormContextProvider }