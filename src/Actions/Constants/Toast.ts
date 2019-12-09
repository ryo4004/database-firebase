export enum ToastActionType {
  SHOW_TOAST = 'TOAST/SHOW_TOAST',
  SHOW = 'TOAST/SHOW',
  HIDE = 'TOAST/HIDE',
  END = 'TOAST/END'
}

export interface ToastAction {
  type: ToastActionType
  payload?: any
}