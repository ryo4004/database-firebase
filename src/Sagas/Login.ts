import { call, select, put, takeLatest } from 'redux-saga/effects'
import { replace } from 'connected-react-router'
import { LoginActionType } from '../Actions/Constants/Login'
import { loading, changePassword, setError } from '../Actions/Actions/Login'
import { setUser } from '../Actions/Actions/Session'
import { showToast } from '../Actions/Actions/Toast'
import { login, getToken } from '../Library/Firebase/Authentication'

function* runRequestLogin () {
  yield call(() => console.log('runRequestLogin'))
  const state = yield select()
  if (!state.login.email || !state.login.password) return yield put(setError({code: 'blankTextbox', message: ''}))
  yield put(loading(true))
  const loginResult = yield call(() => login(state.login.email, state.login.password))
  const idToken = loginResult.response ? yield call(() => getToken(loginResult.response.user)) : false
  console.log(loginResult, idToken)
  if (loginResult.response) {
    yield put(setUser(loginResult.response.user))
    yield put(replace('/home'))
    yield put(showToast('ログインしました'))
  } else {
    yield put(setUser(false))
    yield put(setError({code: loginResult.error.code, message: loginResult.error.message}))
    yield put(changePassword(''))
  }
  yield put(loading(false))
}

export default function* watchRequestLogin () {
  yield takeLatest(LoginActionType.REQUEST_LOGIN, runRequestLogin)
}