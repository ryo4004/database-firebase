import { SessionActionType, SessionAction } from '../Constants/Session'
import { User } from '../../Library/Firebase/Authentication'

export const loading = (loading: boolean): SessionAction => ({
  type: SessionActionType.LOADING,
  payload: { loading }
})

export const requestAuthentication = (): SessionAction => ({
  type: SessionActionType.REQUEST_AUTHENTICATION
})

export const requestLogout = (): SessionAction => ({
  type: SessionActionType.REQUEST_LOGOUT
})

export const setUser = (user: User | false): SessionAction => ({
  type: SessionActionType.SET_USER,
  payload: { user }
})

export const setError = (error: {code: string, message: string}): SessionAction => ({
  type: SessionActionType.SET_ERROR,
  payload: { error }
})