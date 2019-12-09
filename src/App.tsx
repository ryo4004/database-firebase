import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history, sagaMiddleware } from './Store/Store'
import rootSaga from './Sagas/Saga/Saga'

import Navigation from './Component/Navigation'
import './App.scss'

const App: FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={Navigation} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
}

export default App

sagaMiddleware.run(rootSaga)