/**
 * Created by Peter on 2020-05-29
 */

import React, { FunctionComponent, useState } from "react";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {I18N, I18N_NS} from "../_i18n";
import {
  Box, Divider, TextField,
  FormControlLabel,
  Checkbox, withStyles,
  colors,
} from "@material-ui/core";
import {createStyles, makeStyles,} from "@material-ui/core/styles";
import {CheckboxProps} from "@material-ui/core/Checkbox";

import "./index.css"


const useStyle = makeStyles( () =>
  createStyles({
    box: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
    },
    formTitle: {
      fontSize: "26px",
      fontWeight: "bold",
    },


  })
);

const BlueCheckbox = withStyles({
  root: {
    color: colors.blue[400],
    '&$checked': {
      color: colors.blue[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);



const MyProfileBasic: FunctionComponent = ({}, {}) => {
  const classes = useStyle();

  const [enablePassword, setEnablePassword] = useState(false);
  const [ownname, setOwnname] = useState('');
  const [surname, setSurname] = useState('');


  const { t  } = useTranslation(I18N_NS);

  const handlePasswordChecked = (event:React.ChangeEvent<HTMLInputElement>) => {
    setEnablePassword(event.target.checked);
    // props.onEnablePasswordClick(event.target.checked);
    // onEnablePasswordClick(event.target.checked);
  };

  const handleOwnnameChange = (event:any)=> setOwnname(event.target.value);
  const handleSurnameChange = (event:any)=> setSurname(event.target.value);

  return (
    <Box className={classes.box}>
      <div className={classes.formTitle}>
        <span>{t(I18N.my_profile.editprofile)}</span>
      </div>
      <Box height="24px"/>
      <div className="subTitle">
        <span>{t(I18N.my_profile._self)}</span>
      </div>
      <Box className="fieldInnerVerticalMargin"/>
      <Divider/>
      <Box className="fieldVerticalMargin" />
      <div className="subField">
        <span>{t(I18N.my_profile.ownname)}</span>
        <span className="requiredSign"> *</span>
      </div>
      <Box height="5px"/>
      <TextField required
                 id={"text-ownname"}
                 aria-describedby={"my-profile-ownname"}
                 onChange={handleOwnnameChange}
                 value={ownname}
                 variant={"outlined"}
                 InputProps={{
                   classes: {
                     notchedOutline: "containerOutline"
                   }
                 }}
                 InputLabelProps={{
                   shrink: true,
                 }}
                 className="container"
      />
      <Box className="fieldVerticalMargin"/>
      <div className="subField">
        <span>{t(I18N.my_profile.surname)}</span>
        <span className="requiredSign"> *</span>
      </div>
      <Box height="5px"/>
      <TextField required
                 id={"text-surname"}
                 aria-describedby={"my-profile-surname"}
                 onChange={handleSurnameChange}
                 value={surname}
                 variant={"outlined"}
                 InputProps={{
                   classes: {
                     notchedOutline: "containerOutline"
                   }
                 }}
                 InputLabelProps={{
                   shrink: true,
                 }}
                 className="container"
      />
      <Box height="24px"/>
      <FormControlLabel
        control={
          <BlueCheckbox checked={enablePassword}
          onChange={handlePasswordChecked}
          color="primary" />
        }
        label={t(I18N.my_profile.changepassword)}/>
    </Box>


  );

};

MyProfileBasic.propTypes = {
  onEnablePasswordClick : PropTypes.func.isRequired
};


export default MyProfileBasic;
