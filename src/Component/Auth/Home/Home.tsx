import React, { FC } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import store from '../../../Store/Store'
import { StateProps, DispatchProps, HomeProps } from '../../../Interfaces/Auth/Home/Home'
import { requestLogout } from '../../../Actions/Actions/Session'

import './Home.scss'

const mapStateToProps = (state: ReturnType<typeof store.getState>): StateProps => ({
  user: state.session.user
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  requestLogout: () => dispatch(requestLogout())
})

const Login: FC<HomeProps> = ({
  user,
  requestLogout
}) => {

  const showUserinfo = () => {
    if (!user) return
    return (
      <div className='userinfo'>
        <div><span>displayName</span><span>{user.displayName ? user.displayName : 'null'}</span></div>
        <div><span>email</span><span>{user.email ? user.email : 'null'}</span></div>
        <div><span>emailVerified</span><span>{user.emailVerified ? user.emailVerified : 'null'}</span></div>
        <div><span>phoneNumber</span><span>{user.phoneNumber ? user.phoneNumber : 'null'}</span></div>
        <div><span>photoURL</span><span>{user.photoURL ? user.photoURL : 'null'}</span></div>
        <div><span>providerId</span><span>{user.providerId}</span></div>
        <div><span>uid</span><span>{user.uid}</span></div>
      </div>
    )
  }

  return (
    <div className='home'>
      <div>
        <h2>ホーム</h2>
        <button onClick={() => requestLogout()}>ログアウト</button>
        {showUserinfo()}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)