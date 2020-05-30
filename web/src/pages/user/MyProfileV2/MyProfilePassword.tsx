/**
 * Created by Peter on 2020-05-29
 */

import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import {I18N, I18N_NS} from "../_i18n";
import {
  Box, Divider, TextField,
} from "@material-ui/core";

import {PasswordMeter} from "password-meter";
import "./index.css"


const MyProfilePassword = ({}) => {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordStrengthResult, setPasswordStrengthResult] = useState('');


  const { t  } = useTranslation(I18N_NS);

  const handleCurrentPasswordChange = (event:any)=> setCurrentPassword(event.target.value);
  const handleNewPasswordChange = (event:any)=> {
    var newValue = event.target.value;
    setNewPassword(newValue);
    if (!newValue || newValue.length == 0) {
      setPasswordStrengthResult(t(I18N.my_profile.emptypassword));

    } else {
      var checkResult = new PasswordMeter().getResult(newValue);
      if (checkResult.percent < 50) {
        setPasswordStrengthResult(t(I18N.my_profile.weakpassword));
      } else if (checkResult.percent < 85) {
        setPasswordStrengthResult(t(I18N.my_profile.mediumpassword));
      } else {
        setPasswordStrengthResult(t(I18N.my_profile.strongpassword));
      }
    }
  };
  const handleConfirmPasswordChange = (event:any)=> setConfirmPassword(event.target.value);

  return (
    <Box className="subFormBox">
      <Box className="fieldVerticalMargin" />
      <div className="subTitle">
        <span>{t(I18N.my_profile.changepassword)}</span>
      </div>
      <Box className="fieldInnerVerticalMargin"/>
      <Divider/>
      <Box className="fieldVerticalMargin" />
      <div className="subField">
        <span>{t(I18N.my_profile.currentpassword)}</span>
        <span className="requiredSign"> *</span>
      </div>
      <Box height="5px"/>
      <TextField required
                 type="password"
                 id={"text-current-password"}
                 aria-describedby={"my-profile-current-password"}
                 onChange={handleCurrentPasswordChange}
                 value={currentPassword}
                 variant={"outlined"}
                 InputProps={{classes: {notchedOutline: "containerOutline"}}}
                 InputLabelProps={{shrink: true,}}
                 className="container"/>

      <Box className="fieldVerticalMargin"/>
      <div className="subField">
        <span>{t(I18N.my_profile.newpassword)}</span>
        <span className="requiredSign"> *</span>
      </div>
      <Box height="5px"/>
      <TextField required
                 type="password"
                 id={"text-newpassword"}
                 aria-describedby={"my-profile-new-password"}
                 onChange={handleNewPasswordChange}
                 value={newPassword}
                 variant={"outlined"}
                 InputProps={{classes: {notchedOutline: "containerOutline"}}}
                 InputLabelProps={{shrink: true,}}
                 className="container"/>
      <Box display="flex" flexDirection={"row"} className="passwordStrenthContainer">
        <span>{t(I18N.my_profile.passwordStrength)}</span>
        <span>{passwordStrengthResult}</span>
      </Box>


      <Box className="fieldVerticalMargin"/>
      <div className="subField">
        <span>{t(I18N.my_profile.confirmpassword)}</span>
        <span className="requiredSign"> *</span>
      </div>
      <Box height="5px"/>
      <TextField required
                 type="password"
                 id={"text-confirmpassword"}
                 aria-describedby={"my-profile-confirm-password"}
                 onChange={handleConfirmPasswordChange}
                 value={confirmPassword}
                 variant={"outlined"}
                 InputProps={{classes: {notchedOutline: "containerOutline"}}}
                 InputLabelProps={{shrink: true,}}
                 className="container"/>

    </Box>


  );

};


export default MyProfilePassword;
