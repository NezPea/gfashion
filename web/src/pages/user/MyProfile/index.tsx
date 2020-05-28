/**
 * Created by Peter on 2020-05-27
 */

import React, { FunctionComponent } from "react";
import {
  Box,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import MainFrame from "../../../components/MainFrame";
import { I18N, I18N_NS } from '../_i18n'
import {createStyles, makeStyles, Theme, styled} from "@material-ui/core/styles";
import "./index.css"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "400px"
    },
    title: {
      color: "#fff",
      backgroundColor: theme.palette.text.secondary
    },
    cardContent: {
      display: "flex",
      flexFlow: "column"
    },
    form: {
      display: "flex",
      flexFlow: "column",

      left: "58px",
      top: "152px",
    },
    formTitle: {
      fontSize: "20px",
      fontWeight: "bold",
    },
    formLabel: {
      fontSize: "16px"
    },
    formHolder: {
      paddingLeft: "58px",
      paddingTop: "88px",
      maxWidth: "260px",
    }
    ,avatar: {
      width: "77px",
      height: "77px",
    }
    ,changeAvatarButton: {

    }
    , notchedOutline: {
      borderWidth: "1px",
      borderColor: "black !important",
    }


  })
);

const MyProfileSubmitButton = styled(Button) ({
  background: 'rgba(85, 85, 85, 1)',
  color: 'white',
  height: 40,
  padding: '0px'
});

const MyProfile: FunctionComponent = () => {
  const classes = useStyles();
  const { t  } = useTranslation(I18N_NS);
  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.my_profile._self)}</title>
      </Helmet>
      <Box display="flex" flexDirection="column" className={classes.formHolder}>
        <form className={classes.form} noValidate autoComplete="off">
          <div className={classes.formTitle}>
            <span>{t(I18N.my_profile._self)}</span>
          </div>

          <Box height={"30px"}/>
          <div className={classes.formLabel}>
            <span>{t(I18N.my_profile.avatar)}</span>
          </div>

          <Box height={"10px"}/>
          <Box display="flex" flexDirection={"row"} alignItems={"flex-end"}>
            <Avatar src={require(`../../../assets/images/g-icon.png`)} className={classes.avatar} />
            <Box width={"20px"}/>
            <Button className={classes.changeAvatarButton}
                    aria-describedby={"my-profile-change-avatar"}
            >
              <span>{t(I18N.my_profile.change)}</span>
            </Button>
          </Box>


          <Box height={"50px"}/>
          <div className={classes.formLabel}>
            <span>{t(I18N.my_profile.surname)}</span>
          </div>
          <TextField required
                     id={"text-surname"}
                     aria-describedby={"my-profile-surname"}
                     variant={"outlined"}
                     InputProps={{
                       classes: {
                         notchedOutline: classes.notchedOutline
                       }
                     }}
                     InputLabelProps={{
                       shrink: true,
                     }}
                     className="container"
                     />

          <Box height={"30px"}/>
          <div className={classes.formLabel}>
            <span>{t(I18N.my_profile.ownname)}</span>
          </div>

          <TextField required
                     id={"text-ownname"}
                     aria-describedby={"my-profile-ownname"}
                     variant={"outlined"}
                     InputProps={{
                       classes: {
                         notchedOutline: classes.notchedOutline
                       }
                     }}
                     InputLabelProps={{
                       shrink: true
                     }}
                     className="container"
                     />

          <Box height={"60px"}/>

          <MyProfileSubmitButton variant="contained" disableElevation
                  aria-describedby={"my-profile-save"}
          >
            {t(I18N.my_profile.save)}
          </MyProfileSubmitButton>

        </form>
      </Box>
    </MainFrame>
  );
};

export default MyProfile;



