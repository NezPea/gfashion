/**
 * Created by Peter on 2020-05-29
 */
import React, { FunctionComponent } from "react";
import MainFrame from "../../../components/MainFrame";
import { I18N, I18N_NS } from '../_i18n'
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";


const MyProfile: FunctionComponent = () => {
  const { t  } = useTranslation(I18N_NS);

  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.my_profile._self)}</title>
      </Helmet>
    </MainFrame>
  );

};

export default MyProfile;
