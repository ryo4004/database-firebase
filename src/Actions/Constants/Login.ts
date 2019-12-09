export enum LoginActionType {
  LOADING = 'LOGIN/LOADING',
  CHANGE_EMAIL = 'LOGIN/CHANGE_EMAIL',
  CHANGE_PASSWORD = 'LOGIN/CHANGE_PASSWORD',
  REQUEST_LOGIN = 'LOGIN/REQUEST_LOGIN',
  SET_ERROR = 'LOGIN/SET_ERROR'
}

export interface LoginAction {
  type: LoginActionType
  payload?: any
}