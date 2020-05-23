import React from 'react';
import { List, Divider, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ExpandLess, ExpandMore, StarBorder } from '@material-ui/icons';
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

export default function DrawerList() {
  const [open, setOpen] = React.useState(true);
  const [gfWomenOpen, setGfWomenOpen] = React.useState(false);
  const [gfMenOpen, setGfMenOpen] = React.useState(false);
  const [gfOthersOpen, setGfOthersOpen] = React.useState(true);
  const [gfFollowingOpen, setGfFollowingOpen] = React.useState(true);

  const classes = useStyles()

  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        {['Himalaya Coin', 'G-Dollar', 'Gclub'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button key={'Gfashion'} onClick={() => { setOpen(!open) }}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Gfashion'} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={() => { setGfWomenOpen(!gfWomenOpen) }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Women" />
            </ListItem>
            <Collapse in={gfWomenOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button className={classes.nested} onClick={() => { setGfMenOpen(!gfMenOpen) }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Men" />
            </ListItem>
            <Collapse in={gfMenOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button className={classes.nested} onClick={() => { setGfOthersOpen(!gfOthersOpen) }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Others" />
            </ListItem>
            <Collapse in={gfOthersOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem button className={classes.nested} onClick={() => { setGfFollowingOpen(!gfFollowingOpen) }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Following" />
            </ListItem>
            <Collapse in={gfFollowingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText secondary="Women" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {['Gmail', 'GTV', 'Gnews'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}