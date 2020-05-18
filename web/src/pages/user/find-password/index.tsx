import React, { FunctionComponent } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
  TextField
} from "@material-ui/core";
import MainFrame from "../../../components/MainFrame";

const useStyles = makeStyles(() =>
  createStyles({
    captcha: {
      flex: "1",
      margin: "0 16px 0 0"
    },
    textField: {
      marginBottom: "10px"
    }
  })
);
const FindPassword: FunctionComponent = () => {
  const classes = useStyles();
  //   const lang = "cn";
  return (
    <MainFrame>
      <Box display="flex" justifyContent="center">
        <Box width="40%" display="flex" flexDirection="column">
          <h2>忘记密码</h2>
          <Tabs value={0}>
            <Tab label="手机号码" />
            <Tab label="邮箱" />
          </Tabs>
          <TextField
            className={classes.textField}
            label="phone"
            variant="outlined"
          />
          <Typography>请输入您注册时所使用的手机号码</Typography>
          <h3>验证码</h3>
          <Box display="flex" justifyContent="space-between">
            <TextField
              className={classes.captcha}
              label="phone"
              variant="outlined"
            />
            <Button variant="contained" color="primary" disableElevation>
              获取验证码
            </Button>
          </Box>
          <Button variant="contained" color="primary" disableElevation>
            提交
          </Button>
        </Box>
      </Box>
    </MainFrame>
  );
};
export default FindPassword;
