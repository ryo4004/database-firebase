import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Login from './Login/Login'
import Signup from './Signup/Signup'

import './Base.scss'

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({})

const Base: FC = () => {
  return (
    <div className='base'>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Base)