import { Reducer } from 'redux'
import { SignupAction, SignupActionType } from '../Actions/Constants/Signup'
import { SignupState } from '../Interfaces/Base/Signup/Signup'

const initialState: SignupState = {
  loading: false,
  email: '',
  password: '',
  agreement: false,
  error: {code: '', message: ''}
}

const signupReducer: Reducer<SignupState, SignupAction> = (
  state: SignupState = initialState,
  action: SignupAction
): SignupState => {
  switch (action.type) {
    case SignupActionType.LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }
    case SignupActionType.CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload.email
      }
    case SignupActionType.CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      }
    case SignupActionType.CHANGE_AGREEMENT:
      return {
        ...state,
        agreement: action.payload.agreement
      }
    case SignupActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default signupReducer