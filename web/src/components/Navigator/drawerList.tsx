import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
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