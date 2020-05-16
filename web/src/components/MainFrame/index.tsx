import React from 'react';
import Navigator from '../Navigator';
import { Container, Grid } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(12),
    }
  }),
);

export default (props: any) => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Navigator />
      <Grid container spacing={3} direction={"column"}>
        {props.children}
      </Grid>
    </Container>
  )
}
