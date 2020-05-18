import React, { FunctionComponent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Card,
  Divider,
  Button,
  Link,
  CardHeader,
  CardContent,
  TextField
} from "@material-ui/core";
import MainFrame from "../../../components/MainFrame";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "400px"
    },
    cardContent: {
      display: "flex",
      flexFlow: "column"
    },
    title: {
      color: "#fff",
      backgroundColor: theme.palette.text.secondary
    },
    form: {
      display: "flex",
      flexFlow: "column"
    },
    textField: {
      marginBottom: "10px"
    },
    login: {}
  })
);
const Login: FunctionComponent = () => {
  const classes = useStyles();
  const lang = "cn";
  return (
    <MainFrame>
      <Box display="flex" flexDirection="row-reverse">
        <Card className={classes.card}>
          <CardHeader title="Gfashion" className={classes.title} />
          <CardContent className={classes.cardContent}>
            <h3>Sign in</h3>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                className={classes.textField}
                label="email or phone number"
                type="search"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label="password"
                type="password"
                variant="outlined"
              />
            </form>
            <Link href={`/${lang}/find-password`}>Forgot Password?</Link>
            <Divider variant="inset" />
            <Button variant="contained" color="primary" disableElevation>
              Login
            </Button>
          </CardContent>
        </Card>
      </Box>
    </MainFrame>
  );
};
export default Login;
