/**
 * Created by Peter on 2020-05-29
 */
import React, { FunctionComponent } from "react";
import MainFrame from "../../../components/MainFrame";
import { I18N, I18N_NS } from '../_i18n'
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import { Box, } from "@material-ui/core";

import MyProfileBasic from "./MyProfileBasic";

const useStyle = makeStyles( () =>
  createStyles({
    form: {
      display: "flex",
      flexFlow: "row",
      paddingLeft: "40px",
      paddingTop: "50px",
    }
  })
);


const MyProfile: FunctionComponent = () => {
  const classes = useStyle();
  const { t  } = useTranslation(I18N_NS);

  // const handleEnablePasswordClick = (enable : boolean) => {
  //   alert('haha');
  //   if (enable) {}
  // };

  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.my_profile._self)}</title>
      </Helmet>
      <form className={classes.form} noValidate autoComplete="off" >
        <Box display="flex" flexDirection="row">
          <MyProfileBasic></MyProfileBasic>
        </Box>
      </form>

    </MainFrame>
  );

};

export default MyProfile;
