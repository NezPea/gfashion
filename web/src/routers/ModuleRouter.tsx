import React from 'react';
import { Route, Switch } from "react-router-dom";

import GFashionProduct from '../pages/GFashion/product/product';
import GFashion from '../pages/GFashion';
import GMall from '../pages/GMall';
import GClub from '../pages/GClub';
import Test from '../pages/Test';
import Gtrash from '../pages/Trash/Article'
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
    <Route path={`/${lang}/product`} component={GFashionProduct} />
    <Route path={`/${lang}/test`} component={Test} />
    <Route path={`/${lang}/gmall`} component={GMall} />
    <Route path={`/${lang}/gclub`} component={GClub} />
    <Route path={`/${lang}/trash`} component={Gtrash} />
    <Route component={NotFound} />
  </Switch>
);

export default ModuleRouter;
