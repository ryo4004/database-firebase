export enum SessionActionType {
  LOADING = 'SESSION/LOADING',
  REQUEST_AUTHENTICATION = 'SESSION/REQUEST_AUTHENTICATION',
  REQUEST_LOGOUT = 'SESSION/REQUEST_LOGOUT',
  SET_USER = 'SESSION/SET_USER',
  SET_ERROR = 'SESSION/SET_ERROR'
}

export interface SessionAction {
  type: SessionActionType
  payload?: any
}