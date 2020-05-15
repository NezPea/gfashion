import React from 'react';
import { Route, Switch } from "react-router-dom";

import GFashion from '../pages/GFashion';
import GMall from '../pages/GMall';
import GClub from '../pages/GClub';
import Login from '../pages/Login';
import Gtrash from '../pages/Trash'
const NotFound = () => {
  return (
    <div>
      <h1>Notfound page</h1>
    </div>
  )
}

const ModuleRouter = ({ lang }: { lang: string }) => (
  <Switch>
    <Route exact path={`/${lang}/`} component={GFashion} />
    <Route path={`/${lang}/login`} component={Login} />
    <Route path={`/${lang}/gmall`} component={GMall} />
    <Route path={`/${lang}/gclub`} component={GClub} />
    <Route path={`/${lang}/trash`} component={Gtrash} />
    <Route component={NotFound} />
  </Switch>
);

export default ModuleRouter;
