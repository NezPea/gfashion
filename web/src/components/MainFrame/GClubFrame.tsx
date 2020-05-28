import React from 'react';
import GClubNav from '../Navigator/GClubNav';
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

const GClubFrame = (props: any) => {
  const classes = useStyles()

  return (
    <Container maxWidth={false} className={classes.root}>
      <GClubNav />
      {props.children}
      <Footer />
    </Container>
  )
}

export default GClubFrame;
