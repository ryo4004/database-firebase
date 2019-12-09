import { Reducer } from 'redux'
import { ToastAction, ToastActionType } from '../Actions/Constants/Toast'
import { ToastState } from '../Interfaces/Toast/Toast'

const initialState: ToastState = {
  status: false,
  message: '',
  hide: false
}

const loginReducer: Reducer<ToastState, ToastAction> = (
  state: ToastState = initialState,
  action: ToastAction
): ToastState => {
  switch (action.type) {
    case ToastActionType.SHOW_TOAST:
      return {
        ...state,
        message: action.payload.message
      }
    case ToastActionType.SHOW:
      return {
        ...state,
        status: action.payload.status
      }
    case ToastActionType.HIDE:
      return {
        ...state,
        hide: action.payload.hide
      }
    case ToastActionType.END:
      return {
        ...state,
        status: action.payload.status,
        message: action.payload.message,
        hide: action.payload.hide
      }
    default:
      return state
  }
}

export default loginReducer