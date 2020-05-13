import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import ModuleRouter from './ModuleRouter';

const LangRedirect = () => {
  // TODO: detect language or use pre-selected language
  return <Redirect to={`/cn/`} />
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
