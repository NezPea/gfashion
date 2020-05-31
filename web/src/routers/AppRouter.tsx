import React from 'react'
import {
  useLocation,
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import i18next from 'i18next'

import ModuleRouter from './ModuleRouter'

const LangRedirect = () => {
  const location = useLocation()
  return <Redirect to={`/${i18next.language}${location.pathname}`} />
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/zh`} render={() => <ModuleRouter lang="zh" />} />
        <Route path={`/en`} render={() => <ModuleRouter lang="en" />} />
        <Route path="*" render={() => <LangRedirect />} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRouter
