import { ToastActionType, ToastAction } from '../Constants/Toast'

export const showToast = (message: string): ToastAction => ({
  type: ToastActionType.SHOW_TOAST,
  payload: { message }
})

export const show = (): ToastAction => ({
  type: ToastActionType.SHOW,
  payload: { status: true }
})

export const hide = (): ToastAction => ({
  type: ToastActionType.HIDE,
  payload: { hide: true }
})

export const end = (): ToastAction => ({
  type: ToastActionType.END,
  payload: { status: false, message: '', hide: false }
})