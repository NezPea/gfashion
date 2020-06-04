/**
 * Created by Peter on 2020-06-03
 */

import React, {} from 'react'
import {ListItem, ListItemText, ListItemAvatar, makeStyles, createStyles} from '@material-ui/core'
import { Avatar, ListItemSecondaryAction, Button, Typography } from '@material-ui/core'
import { StoreDef } from "./_spec"
import {useTranslation} from "react-i18next";
import {I18N, I18N_NS} from "../_i18n";

const useStyle = makeStyles(()=>
  createStyles({
    item: {
      height: '160px',
      marginRight: '10px',
      backgroundColor: 'red',
      width: '100%',
      '&:hover': {
        backgoundColor: 'rgba(0, 0, 0, 1)'
      }
    },
    avatar: {
      width: "80px",
      height: "80px",
      marginTop: "20px",
    },
    primaryText: {
      marginTop: "20px",
      marginLeft: '10px',
      fontSize: '30px',
      textOverflow: 'ellipsis',
    },
    secondaryText: {
      marginLeft: '10px',
      maxWidth: '300px',
      fontSize: '20px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    removeButton: {
      backgroundColor: 'darkgrey',
      maxWidth: '200px',
      width: '140px',
      minWidth: '90px',
      height: '40px',
      marginRight: '20px',
    }
  })
);


const MyFavoritesOneStore = (
  {oneStore,key, onRemoveStore}:{
    // TODO: Peter: should use the common data structure later
    // neither storeConfig nor storeView in the Swagger now
    // can meet the UI requirements
    key:number,
    oneStore:StoreDef,
    onRemoveStore:(s:StoreDef)=>void

  }) => {

  const classes = useStyle();
  const { t } = useTranslation(I18N_NS);

  if (key){}

  const handleRemoveStore = (s:StoreDef) => {
    onRemoveStore(s);
  }

  return (
    <ListItem alignItems={"flex-start"} key={oneStore.name} className={classes.item}>
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          alt={oneStore.displayName} src={require(`../../../assets/images/g-icon.png`)}/>
      </ListItemAvatar>
      <ListItemText className={classes.primaryText}
        primary={<Typography className={classes.primaryText}>{oneStore.displayName}</Typography>}
        secondary={<Typography className={classes.secondaryText}>{oneStore.desc}</Typography>}
      ></ListItemText>
      <ListItemSecondaryAction>
        <Button aria-label={"remove-button"}
          className={classes.removeButton}
          onClick={()=>handleRemoveStore(oneStore)}
        ><span>{t(I18N.my_favorites.removetext)}</span></Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MyFavoritesOneStore;
