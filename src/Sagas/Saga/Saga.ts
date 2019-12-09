import { all, fork } from 'redux-saga/effects'

import Session from '../Session'
import Login from '../Login'
import Signup from '../Signup'
import Toast from '../Toast'

export default function* rootSaga () {
  yield all([
    fork(Session),
    fork(Login),
    fork(Signup),
    fork(Toast)
  ])
}