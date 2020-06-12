const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const SETNAME = 'SETNAME'
const auth = (state = { isAuth: false, user: '123', list: [1, 22, 3, 4, 5, 6] }, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, ...action.option, isAuth: true }
    case LOGOUT:
      return { ...state, user: "", isAuth: false }
    case SETNAME:
      return { ...state, user: action.name }
    default:
      return state
  }
}
const login = (option) => ({ type: LOGIN, option })
const logout = (option) => ({ type: LOGOUT, option })
const setName = (name) => ({ type: SETNAME, name: name })
export { auth, login, logout, setName }