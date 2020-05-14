import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MainFrame from '../../components/MainFrame';
import Slogan from './slogan';
import { DesignerCarousel } from './designerCarousel';

interface Designer {
  name: string;
  avatar: string;
}

const designers: Array<Designer> = [
  {
    name: 'Miles',
    avatar: ''
  },
  {
    name: 'Luther',
    avatar: ''
  },
  {
    name: 'Pence',
    avatar: ''
  },
  {
    name: 'Ivanka',
    avatar: ''
  },
  {
    name: 'Trump',
    avatar: ''
  }
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    link: {
      margin: theme.spacing(1)
    }
  }),
);

export default () => {
  const classes = useStyles();

  return (
    <MainFrame>
      <div className={classes.root}>
        <Slogan></Slogan>
        <DesignerCarousel designers={designers} />
      </div>
    </MainFrame>
  )
}
