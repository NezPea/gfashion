/**
 * Created by Peter on 2020-06-03
 */

import React from 'react'
import { List, Paper, makeStyles, createStyles, } from '@material-ui/core'

import {StoreDef } from './_spec'
import MyFravoritesOneStore from './MyFavoritesOneStore'

const useStyles = makeStyles(() =>
  createStyles({
    frame: {
      maxHeight: '800px',
      overflow: 'auto',
      backgroundColor: 'yellow',
    },
    itemList: {
    }

  }),
);


const MyFravoritesStores = ({data, onRemoveStore}:{data:StoreDef[], onRemoveStore:(s:StoreDef)=>void}) =>{
  const classes = useStyles();

  return (
    <Paper className={classes.frame}>
      <List className={classes.itemList}>
        {data.map((s, index) => (
          <MyFravoritesOneStore oneStore={s} key={index} onRemoveStore={onRemoveStore}/>
          ))}
      </List>

    </Paper>
  );

};

export default  MyFravoritesStores
