import { Reducer } from 'redux'
import { LoginAction, LoginActionType } from '../Actions/Constants/Login'
import { LoginState } from '../Interfaces/Base/Login/Login'

const initialState: LoginState = {
  loading: false,
  email: '',
  password: '',
  error: {code: '', message: ''}
}

const loginReducer: Reducer<LoginState, LoginAction> = (
  state: LoginState = initialState,
  action: LoginAction
): LoginState => {
  switch (action.type) {
    case LoginActionType.LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }
    case LoginActionType.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload.email
      }
    case LoginActionType.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      }
    case LoginActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default loginReducer