import { call, put, takeLatest } from 'redux-saga/effects'
import { replace } from 'connected-react-router'
import { SessionActionType } from '../Actions/Constants/Session'
import { loading, setUser } from '../Actions/Actions/Session'
import { showToast } from '../Actions/Actions/Toast'
import { auth, getToken, logout } from '../Library/Firebase/Authentication'

function* runRequestAuthentication () {
  console.log('runRequestAuthentication')
  yield put(loading(true))
  const user = yield call(() => auth())
  const idToken = yield call(() => getToken(user))
  yield put(loading(false))
  console.log('result', {user, idToken})
  yield put(setUser(user))
  yield put(user ? replace('/home') : replace('/login'))
}

function* runRequestLogout () {
  console.log('runRequestLogout')
  yield put(loading(true))
  const response = yield call(() => logout())
  yield put(loading(false))
  console.log('result', {response})
  yield put(replace('/login'))
  yield put(showToast('ログアウトしました'))
}

export default function* watchRequestAuthentication () {
  yield takeLatest(SessionActionType.REQUEST_AUTHENTICATION, runRequestAuthentication)
  yield takeLatest(SessionActionType.REQUEST_LOGOUT, runRequestLogout)
}