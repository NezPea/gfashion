import React from "react";
import { Route, Switch } from "react-router-dom";
import GFashionProduct from "../pages/GFashion/product/product";
import GFashionProductListing from "../pages/GFashion/product/productListing";
import GFashion from "../pages/GFashion/Home";
import GMall from "../pages/GMall";
import GClub from "../pages/GClub";
import Test from "../pages/Test";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import FindPassword from "../pages/user/find-password";
const NotFound = () => {
  return (
    <div>
      <h1>Notfound page</h1>
    </div>
  );
};

const ModuleRouter = ({ lang }: { lang: string }) => (
  <Switch>
    <Route exact path={`/${lang}/`} component={GFashion} />
    <Route path={`/${lang}/test`} component={Test} />
    <Route path={`/${lang}/gmall`} component={GMall} />
    <Route path={`/${lang}/gclub`} component={GClub} />
    <Route path={`/${lang}/login`} component={Login} />
    <Route path={`/${lang}/register`} component={Register} />
    <Route path={`/${lang}/find-password`} component={FindPassword} />
    <Route path={`/${lang}/product`} component={GFashionProductListing} />
    <Route path={`/${lang}/product/:productId`} component={GFashionProduct} />
    <Route component={NotFound} />
  </Switch>
);

export default ModuleRouter;
