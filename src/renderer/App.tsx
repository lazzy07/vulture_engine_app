import React from 'react'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import { Routes } from './routes'
import DownloadScreen from './screens/DownloadScreen'
import MainScreen from './screens/MainScreen'

export default function App() {
  return (
    <div>
      <MemoryRouter>
        <Switch>
          <Route path={Routes.mainScreen}><MainScreen /></Route>
          <Route path={Routes.downloadScreen}><DownloadScreen /></Route>
        </Switch>
      </MemoryRouter>
    </div>
  )
}
