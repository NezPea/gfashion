import React from 'react'
import { Route, Switch } from 'react-router-dom'

import DesignerDetailsPageDesktop from '../pages/GFashion/designer-details-page/designer-details-page'
import GFashionProduct from '../pages/GFashion/product/product'
import GFashionProductListing from '../pages/GFashion/product/productListing'
import GFashionSearch from '../pages/GFashion/search/searchPage'
import GFashion from '../pages/GFashion/Home'
import GMall from '../pages/GMall'
import GClub from '../pages/GClub'
import GClubProfile from '../pages/GClub/profile/GClubProfile'
import Login from '../pages/user/login'
import Register from '../pages/user/register'
import FindPassword from '../pages/user/find-password'
import MyProfile from '../pages/user/MyProfile'
import Article from '../pages/GClub/article/Article'
import i18next from 'i18next'

const NotFound = () => {
  return (
    <div>
      <h1>Notfound page</h1>
    </div>
  )
};

const ModuleRouter = ({ lang }: { lang: string }) => {
  i18next.changeLanguage(lang);
  return (
    <Switch>
      <Route exact path={`/${lang}/`} component={GFashion} />
      <Route
        path={`/${lang}/designer/:id`}
        component={DesignerDetailsPageDesktop}
      />
      <Route path={`/${lang}/gmall`} component={GMall} />
      <Route path={`/${lang}/gclub/profile`} component={GClubProfile} />
      <Route exact path={`/${lang}/gclub`} component={GClub} />
      <Route path={`/${lang}/login`} component={Login} />
      <Route path={`/${lang}/register`} component={Register} />
      <Route path={`/${lang}/find-password`} component={FindPassword} />
      <Route route={`/${lang}/my-profile`} component={MyProfile} />
      <Route path={`/${lang}/search/:searchTerm`} component={GFashionSearch} />
      <Route
        path={`/${lang}/category/:categoryId`}
        component={GFashionProductListing}
      />
      <Route path={`/${lang}/product/:productId`} component={GFashionProduct} />
      <Route path={`/${lang}/article`} component={Article} />
      <Route component={NotFound} />
    </Switch>
  )
};

export default ModuleRouter
