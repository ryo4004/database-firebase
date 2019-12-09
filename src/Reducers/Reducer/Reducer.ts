import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'

import { SessionState } from '../../Interfaces/Session'
import { LoginState } from '../../Interfaces/Base/Login/Login'
import { SignupState } from '../../Interfaces/Base/Signup/Signup'
import { ToastState } from '../../Interfaces/Toast/Toast'

import sessionReducer from '../Session'
import loginReducer from '../Login'
import signupReducer from '../Signup'
import toastReducer from '../Toast'

export type Store = {
  session: SessionState,
  login: LoginState,
  signup: SignupState,
  toast: ToastState,
  router: RouterState
}

export default (history: History) => combineReducers<Store>({
  session: sessionReducer,
  login: loginReducer,
  signup: signupReducer,
  toast: toastReducer,

  // The key must be router
  router: connectRouter(history)
})