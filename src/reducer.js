const reducer = (state, action) => {
  if (action.type === 'CHANGE_LOGIN') {
    if (!action.payload) {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      localStorage.removeItem('bio')
  }
    return { ...state, loggedIn: action.payload }
  }
  if (action.type === 'CHANGE_BIO') {
    localStorage.removeItem('bio')
    localStorage.setItem('bio',action.payload)
    return { ...state, user:{...state.user,bio:action.payload} }
  }
  if (action.type === 'CHANGE_NAME') {
    localStorage.removeItem('name')
    localStorage.setItem('name',action.payload)
    return { ...state, user:{...state.user,name:action.payload} }
  }
  throw new Error('no matching action type')
}

export default reducer
