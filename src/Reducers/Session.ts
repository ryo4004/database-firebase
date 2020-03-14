import { Reducer } from 'redux'
import { SessionAction, SessionActionType } from '../Actions/Constants/Session'
import { SessionState } from '../Interfaces/Session'

const initialState: SessionState = {
  loading: false,
  user: false,
  error: {code: '', message: ''}
}

const sessionReducer: Reducer<SessionState, SessionAction> = (
  state: SessionState = initialState,
  action: SessionAction
): SessionState => {
  switch (action.type) {
    case SessionActionType.LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }
    case SessionActionType.SET_USER:
      return {
        ...state,
        user: action.payload.user
      }
    case SessionActionType.SET_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default sessionReducer