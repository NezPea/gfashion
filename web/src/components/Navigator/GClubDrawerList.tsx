import React from 'react';
import { List, Divider, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core'
import { AccountBalance, CalendarToday, FilterHdr, Comment, AttachMoney } from '@material-ui/icons';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    }
  }),
);

const GClubDrawerList = () => {
  const classes = useStyles()

  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <Box px={5}>
        <Box mr={1}><h2>Alexander</h2></Box>
        <Box mr={1}>Level 5</Box>
      </Box>
      <Divider />
      <Box p={2} display="flex">
        <Box px="3px" mr={1} bgcolor="#FF0000">GTV</Box>
        <Box px="3px" mr={1} bgcolor="#00DCE3">G Pay</Box>
        <Box px="3px" bgcolor="#0083E3">G NEWS</Box>
      </Box>
      <Divider />
      <List>
        <ListItem button key={'Lobby'}>
          <ListItemIcon><AccountBalance /></ListItemIcon>
          <ListItemText primary={'Lobby'} />
        </ListItem>
        <ListItem button key={'Invitations'}>
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary={'Invitations'} />
        </ListItem>
        <ListItem button key={'Himalaya'}>
          <ListItemIcon><FilterHdr /></ListItemIcon>
          <ListItemText primary={'Himalaya'} />
        </ListItem>
        <ListItem button key={'G Community'}>
          <ListItemIcon><Comment /></ListItemIcon>
          <ListItemText primary={'G Community'} />
        </ListItem>
        <ListItem button key={'G Exchange'}>
          <ListItemIcon><AttachMoney /></ListItemIcon>
          <ListItemText primary={'G Exchange'} />
        </ListItem>
      </List>
    </div>
  )
}

export default GClubDrawerList;
