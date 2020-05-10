import React, { useState } from 'react';
import Navigator from '../Navigator';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { userSlice } from '../../app/slices/userSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(8),
    }
  }),
);

export default (props: any) => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg' className={classes.root}>
      <Navigator />
      <div className='page-content-wrapper'>
        { props.children }
      </div>
    </Container>
  )
}
