import React from 'react';
import { useLocation, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ModuleRouter from './ModuleRouter';

const LangRedirect = () => {
  const location = useLocation();
  // TODO: detect language or use pre-selected language
  return <Redirect to={`/cn${location.pathname}`} />
}

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/cn`} render={() => <ModuleRouter lang='cn' />} />
        <Route path={`/en`} render={() => <ModuleRouter lang='en' />} />
        <Route path="*" render={() => <LangRedirect/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
