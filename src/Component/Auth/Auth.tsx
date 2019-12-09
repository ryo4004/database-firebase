import React, { FC, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import store from '../../Store/Store'
import { StateProps, DispatchProps, AuthProps } from '../../Interfaces/Auth/Auth'
import { requestAuthentication } from '../../Actions/Actions/Session'

import Home from './Home/Home'

import './Auth.scss'

const mapStateToProps = (state: ReturnType<typeof store.getState>): StateProps => ({
  loading: state.session.loading
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  requestAuthentication: () => dispatch(requestAuthentication())
})

const Auth: FC<AuthProps> = ({
  loading,
  requestAuthentication
}) => {

  useEffect(() => {
    requestAuthentication()
  }, [requestAuthentication])

  if (loading) {
    return <div>読み込み中...</div>
  }

  return (
    <div className='auth'>
      <Switch>
        <Route path='/home' component={Home} />
      </Switch>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)