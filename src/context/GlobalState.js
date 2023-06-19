import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// import App from '../App'
// Initial State
const initialState = {
  transactions: [],
}
// Create  global context
export const GlobalContext = createContext(initialState)
// In order for other components to have access to global sate we need a provider
// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    })
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
