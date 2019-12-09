import React, { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import store from '../../../Store/Store'
import { StateProps, DispatchProps, SignupProps } from '../../../Interfaces/Base/Signup/Signup'

import {
  changeEmail,
  changePassword,
  changeAgreement,
  requestSignup,
  setError
} from '../../../Actions/Actions/Signup'

import './Signup.scss'

const mapStateToProps = (state: ReturnType<typeof store.getState>): StateProps => ({
  loading: state.signup.loading,
  email: state.signup.email,
  password: state.signup.password,
  agreement: state.signup.agreement,
  error: state.signup.error
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  changeEmail: (email) => dispatch(changeEmail(email)),
  changePassword: (password) => dispatch(changePassword(password)),
  changeAgreement: (agreement) => dispatch(changeAgreement(agreement)),
  requestSignup: () => dispatch(requestSignup()),
  setError: (error) => dispatch(setError(error))
})

const Signup: FC<SignupProps> = ({
  loading, email, password, agreement, error,
  changeEmail, changePassword, changeAgreement, requestSignup, setError
}) => {

  useEffect(() => {
    return () => changeEmail('')
  }, [changeEmail])

  useEffect(() => {
    return () => changePassword('')
  }, [changePassword])

  useEffect(() => {
    setError({code: '', message: ''})
    return () => setError({code: '', message: ''})
  }, [setError])

  const keyPress = (e: React.KeyboardEvent) => {
    if (e.which === 13) requestSignup()
  }

  const showError = () => {
    if (error.code === '') return false
    let message
    switch (error.code) {
      // Local Error
      case 'notAgreement':
        message = '利用規約およびプライバシーポリシーへの同意が必要です'
        break
      case 'blankTextbox':
        message = '入力を確認してください'
        break
      // Server Error
      case 'auth/invalid-email':
        message = 'メールアドレスの形式が合っていません'
        break
      case 'auth/email-already-in-use':
        message = 'メールアドレスはすでに使用されています'
        break
      case 'auth/user-not-found':
        message = 'ユーザーが見つかりません'
        break
      case 'auth/weak-password':
        message = 'パスワードが弱すぎます'
        break
      default:
        message = 'error: ' + error.code
    }
    return (
      <div className='err'>{message}</div>
    )
  }

  const buttonLabel = loading ? '読み込み中' : '登録する'

  return (
    <div className='signup'>
      <div>
        <h2>アカウントの新規作成</h2>
        <input type='text' value={email} onChange={(e) => changeEmail(e.target.value)} onKeyPress={(e) => keyPress(e)} placeholder='ユーザ名' />
        <input type='password' value={password} onChange={(e) => changePassword(e.target.value)} onKeyPress={(e) => keyPress(e)} placeholder='パスワード' />
        <div className='agreement'>
          <input type='checkbox' id='agreement' name='agreement' checked={agreement} onChange={() => changeAgreement(!agreement)} /><label htmlFor='agreement'>利用規約およびプライバシーポリシーに同意します</label>
        </div>
        {showError()}
        <button onClick={() => requestSignup()} onTouchStart={() => {}}>{buttonLabel}</button>
        <div className='login-account'>作成済みの方は<Link to='/login'>こちら</Link></div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)