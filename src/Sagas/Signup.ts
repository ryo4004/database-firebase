import { call, select, put, takeLatest } from 'redux-saga/effects'
import { replace } from 'connected-react-router'
import { SignupActionType } from '../Actions/Constants/Signup'
import { loading, changePassword, setError } from '../Actions/Actions/Signup'
import { setUser } from '../Actions/Actions/Session'
import { showToast } from '../Actions/Actions/Toast'
import { signup, getToken } from '../Library/Firebase/Authentication'

function* runRequestSignup () {
  yield call(() => console.log('runRequestSignup'))
  const state = yield select()
  if (!state.signup.email || !state.signup.password) return yield put(setError({code: 'blankTextbox', message: ''}))
  if (!state.signup.agreement) return yield put(setError({code: 'notAgreement', message: ''}))
  yield put(loading(true))
  const signupResult = yield call(() => signup(state.signup.email, state.signup.password))
  const idToken = signupResult.response ? yield call(() => getToken(signupResult.response.user)) : false
  console.log(signupResult, idToken)
  if (signupResult.response) {
    yield put(setUser(signupResult.response.user))
    yield put(replace('/home'))
    yield put(showToast('登録しました'))
  } else {
    yield put(setUser(false))
    yield put(setError({code: signupResult.error.code, message: signupResult.error.message}))
    yield put(changePassword(''))
  }
  yield put(loading(false))
}

export default function* watchRequestSignup () {
  yield takeLatest(SignupActionType.REQUEST_SIGNUP, runRequestSignup)
}