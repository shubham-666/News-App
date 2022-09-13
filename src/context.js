import React, {  useReducer } from 'react'
import reducer from './reducer'
const AppContext = React.createContext()
const token=localStorage.getItem('token')
const name=localStorage.getItem('name')
const bio=localStorage.getItem('bio')
const initialState = {
  loggedIn: token?true:false,
  user:{
    name:name,
    bio:bio
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changeLogin = (status) => {
    dispatch({ type: 'CHANGE_LOGIN',payload:status })
  }
  const changeBio=(payload)=>{
    dispatch({type:'CHANGE_BIO',payload})
  }
  const changeName=(payload)=>{
    dispatch({type:'CHANGE_NAME',payload})
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        changeLogin,
        changeBio,
        changeName
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
