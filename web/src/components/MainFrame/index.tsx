import React from 'react';
import Navigator from '../Navigator';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(8),
    },
    bodyWrapper: {}
  }),
);

export default (props: any) => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Navigator />
      <div className={classes.bodyWrapper}>
        {props.children}
      </div>
    </Container>
  )
}
