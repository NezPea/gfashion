import React from 'react';
import Navigator from '../Navigator';
import Footer from '../Footer';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(8, 0),
    }
  }),
);

export default (props: any) => {
  const classes = useStyles()

  return (
    <Container maxWidth={false} className={classes.root}>
      <Navigator />
      {props.children}
      <Footer />
    </Container>
  )
}
