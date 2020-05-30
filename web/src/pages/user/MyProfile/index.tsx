/**
 * Created by Peter on 2020-05-29
 */
import React, {FunctionComponent} from "react";
import MainFrame from "../../../components/MainFrame";
import { I18N, I18N_NS } from '../_i18n'
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import {createStyles, makeStyles, styled} from "@material-ui/core/styles";
import {Box, Button} from "@material-ui/core";

import MyProfileBasic from "./MyProfileBasic";
import MyProfilePassword from "./MyProfilePassword";

const useStyle = makeStyles( () =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: '2',
      gridGap: '20px',
    },

    form: {
      display: "flex",
      flexFlow: "row",
      width: "100%",
      paddingLeft: "40px",
      paddingTop: "50px",
    },
    formBox: {
    },
    subFormBox: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "380px",
      minWidth: "200px",
      width: "40%",
    },
    formTitle: {
      fontSize: "26px",
      fontWeight: "bold",
    },


  })
);

const MyProfileSubmitButton = styled(Button) ({
  background: 'rgba(102, 153, 204, 1)',
  color: 'white',
  height: 40,
  width: 150,
  padding: '0px'
});

const MyProfile: FunctionComponent = () => {
  const classes = useStyle();
  const { t  } = useTranslation(I18N_NS);

  const handleEnablePasswordClick = () => {
  };

  const handleBasicDataChange = (ownname:string, surname:string) => {
    console.log('haha temp ' + ownname + ' ' + surname);
  };

  const handlePasswordDataChange = (oldPassword:string, newPassword:string, confirmPassword:string) => {
    console.log('haha temp ' + oldPassword + ' ' + newPassword + ' ' + confirmPassword);
  };

  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.my_profile._self)}</title>
      </Helmet>
      <form className={classes.form} noValidate autoComplete="off" >
        <Box display="flex" flexDirection="column" width={"100%"} className={classes.formBox}>
          <div className={classes.formTitle}>
            <span>{t(I18N.my_profile.editprofile)}</span>
          </div>
          <Box height="5px"/>

          <Box display="flex" flexDirection="row" flexWrap="wrap" >
            <MyProfileBasic onEnablePasswordClick={handleEnablePasswordClick}
              onDataChange={handleBasicDataChange}
            />

            <MyProfilePassword onDataChange={handlePasswordDataChange}/>
          </Box>

          <Box height="40px"/>
          <MyProfileSubmitButton variant="contained" disableElevation
                                 aria-describedby={"my-profile-save"}
                                 type="submit"
          >
            {t(I18N.my_profile.save)}
          </MyProfileSubmitButton>
        </Box>

      </form>

    </MainFrame>
  );

};

export default MyProfile;
