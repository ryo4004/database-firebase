import { put, takeLatest } from 'redux-saga/effects'
import { ToastActionType } from '../Actions/Constants/Toast'
import { show, hide ,end } from '../Actions/Actions/Toast'

const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

function* runRequestToast () {
  yield put(show())
  yield wait(3000)
  yield put(hide())
  yield wait(1000)
  yield put(end())
}

export default function* watchRequestToast () {
  yield takeLatest(ToastActionType.SHOW_TOAST, runRequestToast)
}