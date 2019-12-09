import { LoginActionType, LoginAction } from '../Constants/Login'

export const loading = (loading: boolean): LoginAction => ({
  type: LoginActionType.LOADING,
  payload: { loading }
})

export const changeEmail = (email: string): LoginAction => ({
  type: LoginActionType.CHANGE_EMAIL,
  payload: { email }
})

export const changePassword = (password: string): LoginAction => ({
  type: LoginActionType.CHANGE_PASSWORD,
  payload: { password }
})

export const requestLogin = (): LoginAction => ({
  type: LoginActionType.REQUEST_LOGIN
})

export const setError = (error: {code: string, message: string}): LoginAction => ({
  type: LoginActionType.SET_ERROR,
  payload: { error }
})